# USER HUB BD 💻

Este repositório contém as informações necessárias para facilitar o deploy, instalação e utilização do back-end do sistema no seu ambiente de desenvolvimento. 

## 1. Sobre o projeto

O User Hub BD é um projeto back-end que tem como principal feature a criação de contas de usuário e tem como principais regras de implementação:

- [x] Cadastrar usuário;
- [x] Listar usuário;
- [x] Editar usuário;
- [x] Se o Cep não for do estado do Amazonas não pode se cadastrar;
- [x] Se o usuário tiver menos de 18 anos não pode se cadastrar;

## 2. Principais tecnologias utilizadas e necessárias para o funcionamento do projeto ⚙📲

- Prisma, Typescript, Nodejs, Express, Body-parser e Sql Server.

## 3. Estrutura de pastas

```bash
📦 management-users
 ┣ 📦 prisma
 ┃ ┗ 📜 schema.prisma
 ┣ 📦 src
 ┃ ┣ 📂 application
 ┃ ┃ ┣ 📜 user.dto.ts
 ┃ ┃ ┗ 📜 userService.ts
 ┃ ┣ 📂 domain
 ┃ ┃ ┗ 📜 userData.ts
 ┃ ┣ 📂 infrastructure
 ┃ ┃ ┣ 📂 database
 ┃ ┃ ┃ ┣ 📜 prisma.module.ts
 ┃ ┃ ┃ ┗ 📜 prisma.service.ts
 ┃ ┃ ┣ 📜 userRepository.contract.ts
 ┃ ┃ ┗ 📜 userRepository.ts
 ┃ ┣ 📂 modules
 ┃ ┃ ┣ 📜 app.module.ts
 ┃ ┃ ┣ 📜 repository.module.ts
 ┃ ┃ ┗ 📜 userModule.ts
 ┃ ┣ 📂 presentation
 ┃ ┃ ┗ 📜 userController.ts
 ┃ ┣ 📂 utils
 ┃ ┃ ┗ 📜 ETypes.ts
 ┃ ┣ 📜 app.ts
 ┃ ┗ 📜 main.ts
 ┣ 📂 test
 ┃ ┣ 📜 app.e2e-spec.ts
 ┃ ┗ 📜 jest-e2e.json
 ┣ 📜 .env.example
 ┣ 📜 .gitignore
 ┣ 📜 docker-compose.yml
 ┣ 📜 Dockerfile
 ┣ 📜 Makefile
 ┣ 📜 nest-cli.json
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┣ 📜 tsconfig.build.json
 ┣ 📜 tsconfig.json
 ┗ 📜 yarn.lock
```

## 4. Instruções 📚 

- Instalar Node versão 16.14.2 LTS (ou versão superior LTS)

  - https://nodejs.org/en/download/ <br/><br/>

 - Verificar se o Node.js e NPM estão instalados.<br/>
    Quando instalamos o Node.js o gerenciador de pacotes NPM também é instalado, para confirmar a instalação do Node.js e NPM abra o terminal e execute os comandos abaixo <br/><br/>
    `
      node --version
   `
e
              `
              npm --version `

   Se a instalação estiver correta a respostado terminal deve conter algo assim.

   `
               $ node --version
               v20.11.0
   `
      
   `
              $ npm --version
                10.2.4
`
  
- Instalar Yarn 

    `
    $ sudo npm install --global yarn
    `

- Instalar a versão Git 2.25.1 LTS (ou superior LTS)
    
  - No Windows:
    - https://git-scm.com/download/win

  - No Linux pode ser instaldo via linha de comando no terminal
     
    `
      $ sudo apt-get install git-all
      `
- Instalar o Banco de Dados do MSSQL Server 2019 LTS (ou superior LTS)

   - https://www.microsoft.com/pt-br/sql-server/sql-server-downloads
 
### Clonando o repositório do projeto

  - git clone <endereço-do-repositório-do-github>
  - Abrir a pasta clonada

### Configurações

- Criar uma base de dados para o projeto.

- Faça uma cópia do arquivo env.example

- Renomeie a cópia para .env

- Abra o arquivo .env que você acabou de criar e edite as variáveis de ambiente de acordo com as configurações do sistema e a configuração do seu banco de dados.

  - DATABASE_URL=sqlserver://host:port;database=database;user=user;password=password;encrypt=true;trustServerCertificate=true
 
## 5. Comandos básicos para utilização e execução do projeto

Para usar os comandos abaixo é necessário abrir o terminal de comando e navegar até a pasta do projeto.

Abra a pasta do projeto com o terminal de comando.

Executar o comando abaixo para instalar as dependências do projeto (cria a pasta node modules).

`
yarn
`

Executar o comando abaixo para iniciar o projeto.

`
yarn start
`

Executar o comando abaixo para parar o projeto.

`
CTRL+C ou fechar o terminal
`

Para baixar atualizações do projeto (fazer o git pull, iniciar o projeto com as novas atualizações)

`
$ git pull
`

`
$ yarn
`

`
$ yarn start
`

## 6. Fazendo requisições através do Insomnia ✔️

Além da criação, listagem e edição do usuário, pode-se também realizar a busca de um usuário por id e deletá-lo, além de realizar validações como verificar se o CEP é do Amazonas ou se é válido, se o usuário é maior de 18 anos,  se o CPF é válido ou se já está cadastrado no sistema e se todos os campos obrigatórios estão preenchidos.

Exemplo de algumas das requisições que podem ser realizadas: 

- Criar um usuário

  Rota utilizada: http://localhost:3000/users/register

<img width="914" alt="Cadastro de usuário" src="https://github.com/jumara-pimenta/github-finder/assets/79213553/ebc3c95e-6cb6-403d-a825-7bbf62e2d08d">

- Listar os usuários

  Rota utilizada: http://localhost:3000/users/list

<img width="918" alt="Listagem de Usuário" src="https://github.com/jumara-pimenta/github-finder/assets/79213553/b5a757b7-6bd6-4363-9994-347168d97a59">

- Editar um usuário
  
  Rota utilizada: http://localhost:3000/users/edit/:id

<img width="913" alt="Edição de usuário" src="https://github.com/jumara-pimenta/github-finder/assets/79213553/dee46c3c-3675-4126-a634-1b3597c35feb">


-------------------------------------------------------------------------------------------------------------------

### Autora
  
- Linkedin - [Jumara Pimenta](https://www.linkedin.com/in/jumara-souza-pimenta/)
- GitHub - [Jumara Pimenta](https://github.com/jumara-pimenta)
  
