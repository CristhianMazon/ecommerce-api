# 💻 API Backend — Trabalho Acadêmico

Este repositório contém o projeto final da disciplina de **Desenvolvimento Backend**, focado na construção de uma **API RESTful robusta, modular e segura**.  
A aplicação utiliza a stack **Node.js com JavaScript**, integrada a um banco de dados relacional **MySQL**, com mapeamento de dados feito por meio do **Sequelize**.

---

## 📌 Objetivo

Este projeto demonstra, na prática, o uso do padrão **MVC** com foco em:

- 🔐 Autenticação com JWT e criptografia de senhas (bcryptjs)  
- 📦 Gestão completa de entidades: **Usuários, Produtos, Categorias e Pedidos**  
- 🔄 Relacionamentos complexos entre tabelas (1:N, N:N)  
- 🧾 Transações de banco de dados (ex: controle de estoque)  
- 📘 Documentação interativa da API com **Swagger**  
- 🧱 Código modular, seguro e de fácil manutenção

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** → Ambiente de execução JavaScript no servidor  
- **Express.js** → Framework web para APIs RESTful  
- **MySQL** → Banco de dados relacional  
- **Sequelize** → ORM para manipulação de dados  
- **bcryptjs** → Criptografia de senhas  
- **jsonwebtoken** → Autenticação via JWT  
- **dotenv** → Gerenciamento de variáveis de ambiente  
- **Swagger** → Documentação interativa da API  
- **Nodemon** → Reinício automático em desenvolvimento

---

## 📁 Estrutura do Projeto

```text
📦 ecommerce-api
├── 📁 src
│   ├── 📁 config/            → Conexão com banco de dados
│   │   └── database.js
│   ├── 📁 controllers/       → Lógica dos endpoints
│   │   ├── authController.js
│   │   ├── categoryController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── 📁 models/            → Definição das entidades e relacionamentos
│   │   ├── Category.js
│   │   ├── Order.js
│   │   ├── OrderProduct.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── 📁 middlewares/       → Autenticação e validações
│   │   └── auth.js
│   ├── 📁 routes/            → Endpoints organizados por entidade
│   │   ├── authRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── 📁 docs/              → Configuração Swagger
│   │   └── swagger.js
│   ├── 📁 utils/             → Scripts auxiliares
│   │   └── populate.js
│   ├── app.js                → Configuração principal do Express
│   └── server.js             → Inicialização da aplicação
├── .env.example              → Exemplo de variáveis de ambiente
├── package.json              → Dependências e scripts
└── package-lock.json         → Controle de versões
```

---

## 🚀 Como Executar o Projeto

### ✅ Pré-requisitos

- Node.js (v14 ou superior)  
- MySQL Server (recomenda-se o XAMPP)  
- MySQL Workbench (opcional)

---

### 🧰 Instalação e Configuração

1. **Clone o repositório:**

```bash
git clone https://github.com/CristhianMazon/ecommerce-api.git
cd ecommerce-api
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o ambiente:**

Crie o arquivo `.env` na raiz com base no exemplo abaixo:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta_jwt_bem_longa_e_aleatoria
DB_NAME=api_ecommerce_db
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
```

> 🔒 Altere `DB_USER` e `DB_PASSWORD` conforme suas credenciais MySQL.

4. **Inicie o MySQL:**

- Abra o XAMPP  
- Clique em “Start” no módulo MySQL

5. **Crie o banco de dados:**

- Acesse o MySQL Workbench  
- Crie um schema com o nome definido no `.env` (ex: `api_ecommerce_db`)

6. **Popule o banco com dados iniciais:**

```bash
npm run populate
```

> Mensagem esperada: `Banco populado com sucesso!`

7. **Execute a aplicação:**

```bash
npm run dev
```

---

## 🧪 Testando a API

### 📘 Documentação Interativa

Acesse via navegador:  
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

### 🔐 Login de Teste

Use as credenciais abaixo no endpoint `/api/auth/login`:

- **Email:** `cris@example.com`  
- **Senha:** `123456`

Copie o token de acesso retornado e clique em "Authorize" na interface Swagger para inserir:

```
Bearer SEU_TOKEN_AQUI
```

Ou utilize no Postman:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 📚 Observações

- 🔐 JWT e senhas protegidas com bcryptjs  
- 🔁 Pedidos utilizam transações para garantir controle de estoque  
- 🔗 Relacionamentos bem definidos com integridade referencial no Sequelize  
- 📘 Swagger cobre todos os endpoints da API  
- 🧹 Código modular e organizado segundo o padrão MVC

---

## 👨‍💻 Autor

**Cristhian Silveira Mazon**  
📧 [cristhian.s.mazon@gmail.com](mailto:cristhian.s.mazon@gmail.com)
