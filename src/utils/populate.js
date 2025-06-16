const sequelize = require('../config/database');
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');

const populate = async () => {
  await sequelize.sync({ force: true }); // ⚠️ CUIDADO: apaga tudo!

  const password = await bcrypt.hash('123456', 10);
  const user = await User.create({ name: 'Cristhian', email: 'cris@example.com', password });

  const cat1 = await Category.create({ name: 'Eletrônicos' });
  const cat2 = await Category.create({ name: 'Roupas' });

  const prod1 = await Product.create({ name: 'Notebook', price: 4000, categoryId: cat1.id });
  const prod2 = await Product.create({ name: 'Camiseta', price: 50, categoryId: cat2.id });

  console.log('Banco populado com sucesso!');
  process.exit();
};

populate();
