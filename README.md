💻 API Backend - Trabalho Acadêmico
Este repositório contém o projeto final da disciplina de Desenvolvimento Backend, focado na construção de uma API RESTful robusta, modular e segura. A aplicação utiliza a stack Node.js com JavaScript, integrada a um banco de dados relacional MySQL, com mapeamento de dados feito por meio do Sequelize.

📌 Objetivo
O projeto tem como finalidade demonstrar a aplicação do padrão MVC em uma aplicação real de backend, com foco em:

Autenticação com JWT e criptografia de senhas (bcryptjs).

Gestão completa de entidades (Usuários, Produtos, Categorias, Pedidos).

Relacionamentos complexos entre tabelas (1:N, N:N).

Transações de banco de dados para garantir integridade (ex: controle de estoque em pedidos).

Documentação interativa da API com Swagger.

Organização de código, modularidade e segurança.

🛠️ Tecnologias Utilizadas
Node.js: Ambiente de execução de JavaScript no servidor.

Express.js: Framework web para APIs RESTful.

MySQL: Banco de dados relacional.

Sequelize: ORM (Object-Relational Mapper) para abstração e manipulação de dados.

bcryptjs: Biblioteca para criptografia (hash) de senhas.

jsonwebtoken: Implementação de JSON Web Tokens (JWT) para autenticação.

dotenv: Gerenciamento de variáveis de ambiente.

Swagger (swagger-jsdoc, swagger-ui-express): Ferramenta para gerar e visualizar documentação interativa da API.

Nodemon: Ferramenta para reinicialização automática do servidor durante o desenvolvimento.

📁 Estrutura de Diretórios
📦 PROJETO_JACKSON_BACKEND
 ├── 📁 src
 │   ├── 📁 config/        → Configurações da aplicação (ex: conexão com o banco de dados)
 │   ├── 📁 controllers/   → Lógica de controle para cada endpoint (processamento de requisições)
 │   ├── 📁 models/        → Definição das entidades do banco de dados (tabelas e associações Sequelize)
 │   ├── 📁 middlewares/   → Funções que interceptam requisições (ex: autenticação JWT, validações)
 │   ├── 📁 routes/        → Definição das rotas da API, organizadas por módulo (ex: auth, products)
 │   ├── 📁 docs/          → Configuração e metadados para a documentação Swagger
 │   ├── 📁 utils/         → Funções utilitárias (ex: script de população do banco de dados)
 │   ├── 📄 app.js         → Configuração principal do Express e middlewares globais da aplicação
 │   └── 📄 server.js      → Ponto de entrada da aplicação, responsável por iniciar o servidor
 ├── 📄 .env.example       → Exemplo de arquivo para as variáveis de ambiente (nunca versionar o .env real!)
 ├── 📄 package.json       → Define as dependências do projeto e scripts de execução
 └── 📄 package-lock.json  → Garante a instalação de versões exatas das dependências

🚀 Como Executar o Projeto
Pré-requisitos
Certifique-se de ter instalado em sua máquina:

Node.js (versão 14 ou superior)

MySQL Server (Recomendado o uso de XAMPP para gerenciar o MySQL localmente)

MySQL Workbench (Opcional, mas útil para gerenciar o banco de dados visualmente)

Configuração e Instalação
Clone o Repositório:

git clone https://github.com/CristhianMazon/PROJETO_JACKSON_BACKEND.git
cd PROJETO_JACKSON_BACKEND

Instale as Dependências:

npm install

Configure o Ambiente (.env):

Crie um arquivo chamado .env na raiz do projeto (na mesma pasta do package.json).

Preencha-o com suas credenciais do MySQL e uma chave JWT secreta. Exemplo:

PORT=3000
JWT_SECRET=sua_chave_secreta_jwt_bem_longa_e_aleatoria
DB_NAME=api_ecommerce_db
DB_USER=root # ou seu usuário MySQL (ex: api_user)
DB_PASSWORD= # sua senha MySQL (vazia se o root não tiver senha, ou a que configurou)
DB_HOST=localhost

Importante: Ajuste DB_USER e DB_PASSWORD conforme as credenciais do seu MySQL Server.

Inicie o Servidor MySQL (via XAMPP):

Abra o Painel de Controle do XAMPP.

Clique em "Start" ao lado de MySQL. Certifique-se de que ele esteja rodando (status verde).

Crie o Banco de Dados (Esquema):

Abra o MySQL Workbench.

Conecte-se à sua instância local do MySQL.

No painel Navigator, na seção SCHEMAS, clique com o botão direito e selecione "Create Schema...".

No campo "Schema Name", digite o nome exato que você configurou em DB_NAME no seu .env (ex: api_ecommerce_db).

Clique em "Apply" (duas vezes) e depois em "Finish".

Popule o Banco de Dados com Dados Iniciais:

Execute este script para criar todas as tabelas e inserir alguns dados de exemplo (um usuário, categorias, produtos e um pedido):

npm run populate

Você verá a mensagem "Banco populado com sucesso!". (Se tiver erros de conexão ou acesso, revise os passos 3, 4 e 5).

Inicie o Servidor da API:

npm run dev

O servidor estará rodando na porta especificada no seu .env (padrão: 3000).

Testando a API
Com o servidor rodando, você pode testar a API de forma interativa:

Documentação Interativa com Swagger UI:

Acesse no seu navegador: http://localhost:3000/api-docs

Para rotas protegidas: Faça login via POST /api/auth/login (email: cris@example.com, senha: 123456) para obter um token JWT. Em seguida, clique no botão verde "Authorize" no canto superior direito e insira o token no formato Bearer SEU_TOKEN_AQUI.

Postman (ou ferramenta similar):

Você pode usar o Postman para criar e enviar requisições para os endpoints da API. Lembre-se de adicionar o cabeçalho Authorization: Bearer SEU_TOKEN_AQUI para rotas protegidas.

📚 Observações
O projeto está finalizado e todas as funcionalidades principais e requisitos do trabalho foram implementados.

Segurança: Senhas criptografadas (bcryptjs), autenticação stateless via JWT, e proteção de rotas por middlewares.

Integridade de Dados: Operações complexas (ex: criação/cancelamento de pedidos) utilizam transações de banco de dados para garantir consistência e controle de estoque.

Integridade Referencial: As associações do Sequelize configuram a integridade no nível do banco de dados (usando onDelete).

Organização: O código segue um padrão modular com separação clara de responsabilidades entre controllers, models, routes e middlewares.

🧑‍💻 Autor
Cristhian Silveira Mazon
📧 cristhian.mazon@gmail.com