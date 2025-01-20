# Sobre o projeto (PT-BR)

Esse repositório é a resolução do desafio técnico Back-End da empresa Precato, utilizado como forma de estudo, me permitindo treinar a interpretação
de regras de negócios e de aprender uma nova tecnologia, no caso, o Fastify como framework para rodar a aplicação em NodeJs.

## Como rodar o projeto

1. Via Docker

  - Clone o repositório para a sua máquina com o comando git clone <link_https_repositorio>
  - Entre na pasta raíz do projeto, onde está o arquivo docker-compose.yml
  - Rode o arquivo docker-compose.yml com o comando docker-compose up --build
  - Acesse o projeto na sua máquina nas portas expostas pelo docker
  - Para parar o projeto, rode docker-compose down
  
2. Via Node

  - Clone o repositório para a sua máquina com o comando git clone <link_https_repositorio>
  - Instale as dependências com npm install
  - Configure as suas variáveis de ambiente em um arquivo .env
  - Instale o MySQL na sua máquina e crie um banco com o nome desafio_precato
  - Rode npx sequelize-cli db:migrate e npx sequelize-cli db:seed para configurar e povoar o banco
  - Inicie o servidor com npm run dev

# About the project

This repository is the solution to the Back-End technical challenge of the company Precato, used as a form of study, allowing me to practice the interpretation of business rules and learn a new technology, in this case, Fastify as a framework to run the application in NodeJs.

## How to run the project (ENG)

1. Docker

- Clone the repository to your machine with the command git clone <link_https_repositorio>
- Enter the root folder of the project, where the docker-compose.yml file is located
- Run the docker-compose.yml file with the command docker-compose up --build
- Access the project on your machine using the ports exposed by docker
- To stop the project, run docker-compose down

2. Node

- Clone the repository to your machine with the command git clone <link_https_repositorio>
- Install the dependencies with npm install
- Configure your environment variables in a .env file
- Install MySQL on your machine and create a database with the name desafio_precato
- Run npx sequelize-cli db:migrate and npx sequelize-cli db:seed to configure and populate the database
- Start the server with npm run dev
