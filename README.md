# Inventory Manager

Uma aplicação de gerenciamento de produtos desenvolvida com a stack MERN (MongoDB, Express, React e Node.js). O sistema permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) em produtos de forma simples e intuitiva, com um layout construído usando Chakra UI e gerenciamento de estado com Zustand.

Esse projeto foi desenvolvido como forma de estudo prático de fullstack JavaScript.

---

## ✨ Funcionalidades

- Listar produtos cadastrados
- Adicionar novos produtos
- Editar produtos existentes
- Deletar produtos do sistema
- 
---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React
- Chakra UI
- Zustand
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🚀 Como rodar o projeto localmente

> É necessário ter o **Node.js** e o **MongoDB** instalados na máquina.

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/inventory-manager.git
```

2. Entre nas pastas do projeto (frontend e backend) e instale as dependências:

```bash
cd frontend
npm install

cd ../backend
npm install
```
3. Configure o arquivo .env com suas credenciais do MongoDB. Um exemplo:

```bash
MONGODB_URI=mongodb://localhost:27017/inventory
PORT=5000
```
4. Inicie o servidor backend:

```bash
npm run dev
```
5. Em outro terminal, inicie o frontend:

```bash
npm start
```
6. Acesse o app no navegador:

```bash
http://localhost:3000
```


