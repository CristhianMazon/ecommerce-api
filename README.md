# 💻 API Backend - Trabalho Acadêmico

Este repositório contém o projeto final da disciplina de **Desenvolvimento Backend**, focado na construção de uma **API RESTful robusta, modular e segura**.  
A aplicação utiliza a stack **Node.js com JavaScript**, integrada a um banco de dados relacional **MySQL**, com mapeamento de dados feito por meio do **Sequelize**.

---

## 📌 Objetivo

O projeto tem como finalidade demonstrar a aplicação do padrão MVC em uma aplicação real de backend, com foco em:

- 🔐 Autenticação com JWT e criptografia de senhas (bcryptjs)  
- 📦 Gestão completa de entidades (Usuários, Produtos, Categorias, Pedidos)  
- 🔄 Relacionamentos complexos entre tabelas (1:N, N:N)  
- 🧾 Transações de banco de dados para garantir integridade (ex: controle de estoque em pedidos)  
- 📘 Documentação interativa da API com Swagger  
- 🧱 Organização de código, modularidade e segurança  

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** → Ambiente de execução JavaScript no servidor  
- **Express.js** → Framework web para APIs RESTful  
- **MySQL** → Banco de dados relacional  
- **Sequelize** → ORM para manipulação de dados  
- **bcryptjs** → Criptografia de senhas  
- **jsonwebtoken** → Autenticação com JWT  
- **dotenv** → Gerenciamento de variáveis de ambiente  
- **Swagger** → Documentação da API (swagger-jsdoc + swagger-ui-express)  
- **Nodemon** → Reinício automático em desenvolvimento  

---

## 📁 Estrutura de Diretórios

```text
📦 PROJETO_JACKSON_BACKEND
├── 📁 src
│   ├── 📁 config/        → Conexão com banco de dados
│   ├── 📁 controllers/   → Lógica dos endpoints
│   ├── 📁 models/        → Entidades e relacionamentos Sequelize
│   ├── 📁 middlewares/   → Autenticação, validações, etc
│   ├── 📁 routes/        → Rotas organizadas por entidade
│   ├── 📁 docs/          → Configuração Swagger
│   ├── 📁 utils/         → Scripts auxiliares (populate)
│   ├── 📄 app.js         → Configuração geral do Express
│   └── 📄 server.js      → Inicialização da aplicação
├── 📄 .env.example       → Exemplo de variáveis de ambiente
├── 📄 package.json       → Dependências e scripts
└── 📄 package-lock.json  → Versões travadas das dependências
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
git clone https://github.com/CristhianMazon/PROJETO_JACKSON_BACKEND.git
cd PROJETO_JACKSON_BACKEND
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Crie o arquivo `.env`:**

```env
PORT=3000
JWT_SECRET=sua_chave_secreta_jwt_bem_longa_e_aleatoria
DB_NAME=api_ecommerce_db
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
```

> 🔒 Altere `DB_USER` e `DB_PASSWORD` de acordo com suas credenciais MySQL.

4. **Inicie o MySQL via XAMPP:**

- Abra o painel XAMPP  
- Clique em “Start” no MySQL  

5. **Crie o banco de dados:**

- Abra o MySQL Workbench  
- Crie o schema com o mesmo nome do `.env` (ex: `api_ecommerce_db`)

6. **Popule o banco com dados iniciais:**

```bash
npm run populate
```

> Você verá a mensagem `Banco populado com sucesso!`

7. **Execute a aplicação:**

```bash
npm run dev
```

---

## 🧪 Testando a API

### 🔍 Documentação Interativa (Swagger)

Acesse:  
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### 🔐 Login de Teste

- **Email:** `cris@example.com`  
- **Senha:** `123456`  

Use esse login no endpoint `/api/auth/login` para obter um token.  
Depois, clique em “Authorize” na interface Swagger e insira o token:

```
Bearer SEU_TOKEN_AQUI
```

> Ou utilize o Postman com o cabeçalho:  
`Authorization: Bearer SEU_TOKEN_AQUI`

---

## 📚 Observações

- 🔐 Autenticação JWT e senhas protegidas com bcryptjs  
- 🔁 Transações em pedidos garantem controle de estoque  
- 🧱 Integridade referencial definida com `onDelete` no Sequelize  
- 📘 Swagger documenta todos os endpoints  
- 🧹 Código limpo, modular, seguindo o padrão MVC  

---

## 🧑‍💻 Autor

**Cristhian Silveira Mazon**  
📧 [cristhian.s.mazon@gmail.com](mailto:cristhian.s.mazon@gmail.com)
