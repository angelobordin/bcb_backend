<h1>BigChatBrasil Backend</h1>

<h2>Descrição</h2>
Projeto backend para um app de envio de mensagens.<br>

<h2>Funcionalidades & endpoints</h2>
<h3>Implementadas :heavy_check_mark:</h3>

**Mensagens**
- `Envio de mensagem`:
  - Método: **POST**
  - Endpoint: `/message/send`.
- `Exclusão de mensagem`:
  - Método: **DELETE**
  - Endpoint: `/message/:id`.
- `Atualização de mensagem`:
  - Mètodo: **PUT**
  - Endpoint: `/message/:id`.
- `Criação de mensagem`:
  - Método: **POST**
  - Endpoint: `/message`. 
- `Listagem`:
  - Método: **GET**
  - Endpoint: `/message`.
</br>

**Plano**
- `Exclusão de plano do cliente`:
  - Método: **DELETE**
  - Endpoint ` /plan/:id`.
- `Atualização de plano do cliente`:
  - Método: **PUT**
  - Endpoint: `/plan/:id`.
- `Listagem`:
  - Mètodo: **GET**
  - Endpoint: `/plan`.
- `Busca plano por ID`:
  - Método: **GET**
  - Endpoint: `/plan/:id`.
- `Criação de plano`:
  - Método: **POST**
  - Endpoint: `/plan`.
- `Adição de crédito`:
  - Método: **PATCH**
  - Endpoint: `/plan/credit/:id`.
</br>

**Cliente**
- `Exclusão de cliente`:
  - Método: **DELETE**
  - Endpoint: `/customer/:id`.
- `Atualização de cliente`:
  - Método: **PUT**
  - Endpoint: `/customer/:id`.
- `Listagem`:
  - Mètodo: **GET**
  - Endpoint: `/customer`.
- `Busca cliente por ID`:
  - Método: **GET**
  - Endpoint: `/customer/:id`. 
- `Criação de cliente`:
  - Método: **POST**
  - Endpoint: `/customer`.

<h2>Rodando o projeto 🛠️</h2>
<h3>Pré-Requisitos</h3>

⚠️ [Node](https://nodejs.org/en/)<br>
⚠️ [PostgreSQL](https://www.postgresql.org/download/)<br>
⚠️ [VS Code](https://code.visualstudio.com/Download)<br>

Após baixar o projeto no seu dispositivo, você pode abri-lo no VS Code.<br>
Para isso abra o VS Code em seu dispositivo, após clique em:

<h3>VS Code</h3>

- **File >> Open Folder...** ou digite **Ctrl+K** / **Ctrl+O**;
- Abra o terminal em **Terminal >> New Terminal**;
- Digite **npm install** para realizar a instalação das dependências do projeto;

<h3>Banco de Dados</h3>

- Altere o nome do arquivo **.env.example** na raíz do projeto, para **.env**
- Altere as informações da variável **DATABASE_URL** conforme dados do DB, e descomente as váriaveis;<br>
EX: DATABASE_URL="postgresql://root:root@localhost:5432/meu_banco_de_dados"
- Após basta entrar no terminal novamente e digitar **npx prisma migrate dev --name init**;

Finalizada as etapas acima sem erro, basta voltar no seu PGAdmin e dar um refresh que as 'tables' devem ter sido criadas.<br>
Após todos os passo acima serem realizados, digite **npm run start:dev** e o projeto estará rodando na porta 3000 em seu computador.

<h3>Utilizando o Sistema</h3>

- Dentro do projeto, existe um arquivo 'endpoints' que contem as rotas, e você deve importar no **INSOMNIA** caso queira realizar os testes nos Endpoints.
  
<h2>Tecnologias Utilizadas</h2>

<ul>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" width="20" height="20"/><b> Visual Studio Code</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20"/><b> Node.JS</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" height="20"/><b> TypeScript</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" height="20"/><b> Express</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" width="20" height="20"/>NestJS</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="20" height="20"/><b> Git</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="20" height="20"/>PostgreSQL</li>
</ul>

# Autores

| [<img src="https://avatars.githubusercontent.com/u/70332789?s=400&u=c6b947894c97e0e941f64aafeb22719ff49589ac&v=4" width=115><br><sub>Angelo Bordin</sub>](https://github.com/angelobordin) |
| :---: |
