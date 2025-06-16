const sequelize = require('../config/database');
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');

const populate = async () => {
  await sequelize.sync({ force: true }); // ⚠️ CUIDADO: apaga tudo! Use apenas em desenvolvimento.

  console.log('Populando banco de dados...');

  // Cria um usuário de exemplo
  const password = await bcrypt.hash('123456', 10);
  const user = await User.create({ name: 'Cristhian', email: 'cris@example.com', password });
  console.log('Usuário criado:', user.name);

  // Cria categorias de exemplo
  const cat1 = await Category.create({ name: 'Eletrônicos' });
  const cat2 = await Category.create({ name: 'Roupas' });
  const cat3 = await Category.create({ name: 'Livros' });
  console.log('Categorias criadas:', cat1.name, cat2.name, cat3.name);

  // Cria produtos de exemplo, incluindo descrição e estoque
  const prod1 = await Product.create({
    name: 'Notebook Dell XPS 15',
    description: 'Notebook de alta performance com tela infinita e processador i7.',
    price: 4000.00,
    stock: 25, // Adicionado estoque
    categoryId: cat1.id
  });
  const prod2 = await Product.create({
    name: 'Camiseta de Algodão Masculina',
    description: 'Camiseta básica 100% algodão, confortável e durável.',
    price: 50.00,
    stock: 100, // Adicionado estoque
    categoryId: cat2.id
  });
  const prod3 = await Product.create({
    name: 'O Senhor dos Anéis: A Sociedade do Anel',
    description: 'Primeiro volume da clássica trilogia de fantasia de J.R.R. Tolkien.',
    price: 89.90,
    stock: 30, // Adicionado estoque
    categoryId: cat3.id
  });
  console.log('Produtos criados:', prod1.name, prod2.name, prod3.name);

  console.log('Banco populado com sucesso!');
  process.exit(); // Encerra o processo após a população
};

populate().catch(err => {
  console.error('Erro ao popular o banco de dados:', err);
  process.exit(1); // Encerra com erro
});
