<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🔴 Teslo API - Learning NestJS + Docker + MongoDB

This project is an API built with [NestJS](https://nestjs.com/) to learn how to build modular and scalable REST APIs while integrating tools like Docker and Postgres.

---

## 📚 Objective

To progressively learn NestJS by building a API called "Teslo", practicing the use of Docker, Postgres Database, DTOs, TypeORM and best practices in API development

---


## 🛠️ Technologies Used

- **Node.js**
- **NestJS**
- **TypeScript**
- **MongoDB + Mongoose**
- **Postgres**
- **TypeORM**
- **ESLint + Prettier**

---


## ▶️ How to Run the Project

1. Clone this repository:

  ```bash
  git clone https://github.com/yuzmaryporras/nest-pokedex.git
  cd nest-pokedex
  ```

2. Install dependencies:

  ```bash
  npm install
  ```

3. Have nest cli instaled:

  ```bash
  npm i -g  @nestjs/cli
  ```

4. Upload database

  ```bash
  docker-compose up -d
  ``` 

5. Clone the file ```.env.template:```  and rename to ```.env```
6. Fill the environment variables defined in ```.env```
7. Run application in dev with

  ```bash
  npm run start:dev
  ``` 


## 📬 Postman Collection

All available API requests are included in a Postman collection so you can test them easily.

📁 File path:

```bash
postman/teslo-shop.postman_collection.json
```

You can import this file into Postman to test endpoints like:

```bash
GET /product/:term

GET /product/?limit=5&offset=10 - Pagination

POST /product

PATCH /product/:term

DELETE /product/:id
