👨‍💻 Autor

**Renan Vilela** \
Desenvolvedor Fullstack

# 💰 Finance API (Back-end)

API REST para gerenciamento de finanças pessoais, permitindo que usuários cadastrem e gerenciem suas transações (ganhos, despesas e investimentos).

## 🚀 Tecnologias

- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- Zod (validação)
- bcrypt (hash de senha)
- UUID
- ESLint + Husky + lint-staged

## 📌 Conceito do Projeto

Este projeto foi desenvolvido inicialmente **sem uso de ORM** (como Prisma ou Drizzle), utilizando **queries SQL puras com a biblioteca `pg`**.

A decisão foi intencional, com os seguintes objetivos:

- Ter controle total sobre as queries SQL
- Reforçar fundamentos de banco de dados relacional
- Evitar abstrações durante a construção da regra de negócio

A aplicação foi estruturada utilizando **arquitetura em camadas (Controller → UseCase → Repository)**, garantindo baixo acoplamento entre as responsabilidades.

Com isso, o projeto permite **substituir facilmente a camada de acesso a dados**, possibilitando uma futura migração para ORM (Prisma) **sem impacto nas regras de negócio ou na camada de aplicação**.

Essa abordagem demonstra a capacidade de adaptação da arquitetura frente a mudanças de tecnologia, mantendo o código escalável e sustentável.

## ⭐ Funcionalidades

- Cadastro de usuário
- Autenticação (hash com bcrypt)
- Criação de transações: 💵 EARNING, 💸 EXPENSE, 📈 INVESTMENT
- Listagem de transações por usuário
- Validação de dados com Zod
- Estrutura em camadas (Controller → UseCase → Repository)

## 🧠 Decisões Técnicas

- Uso de SQL direto com pg ao invés de ORM
- Separação clara de responsabilidades:
- Controller → entrada HTTP
- UseCase → regra de negócio
- Repository → acesso ao banco
- Validação centralizada com Zod
- Uso de UUID como identificador

## ⏩ Próximas atualizações

- Testes automatizados
- Rate Limiting
- Autenticação JWT
- Refresh Token
- Paginação nas transações
- Filtro por data e tipo
- Refatoração para o uso do ORM Prisma

## 🛠️ Como rodar o projeto

### 1 - Clone do repositório

git clone https://github.com/renanvilelati/finance-app
cd back-end

### 2 - Instale as dependências

npm install

### 3 - Configure as variáveis de ambiente

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_PORT=
POSTGRES_HOST=
POSTGRES_DB=
PORT=
```

### 4 - Rode as migrations

npm run migration

### 5 - Inicie o servidor

npm run start:dev
