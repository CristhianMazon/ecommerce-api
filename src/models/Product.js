const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false // Adicionado para garantir que o nome seja obrigatório
  },
  description: { // Adicionado o campo de descrição
    type: DataTypes.TEXT,
    allowNull: true // Pode ser nulo se não houver descrição
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false // Adicionado para garantir que o preço seja obrigatório
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false, // Adicionado para garantir que o estoque seja obrigatório
    defaultValue: 0 // Valor padrão para estoque, se não especificado
  },
});

// Relacionamento Produto N:1 Categoria
// onDelete 'SET NULL': Se uma categoria for deletada, o categoryId dos produtos associados será definido como NULL.
// Certifique-se de que a coluna categoryId na tabela de produtos permita valores nulos no banco de dados.
Product.belongsTo(Category, { foreignKey: 'categoryId', onDelete: 'SET NULL' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

module.exports = Product;
