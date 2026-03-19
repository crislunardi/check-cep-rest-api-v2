# CEP API - Node.js + Express + Tests

API REST desenvolvida em Node.js utilizando Express para integração com a BrasilAPI (CEP V2), aplicando arquitetura em camadas, validação de entrada, tratamento de erros e testes automatizados unitários e de integração.

## 🚀 Tecnologias

- Node.js
- Express
- Axios
- Jest
- Supertest
- Nock

## 🏗 Arquitetura

A aplicação segue arquitetura em camadas (Layered Architecture):

```
routes → controllers → services → external API
           ↓
        utils
           ↓
     middlewares
```

Separação de responsabilidades:

- Routes → endpoints HTTP
- Controllers → orquestração
- Services → integração externa
- Utils → validações
- Middlewares → tratamento de erro

## 📦 Instalação

```bash
git clone https://github.com/seu-user/cep-api
cd cep-api
npm install
```

Criar .env

```
PORT=3000
```

Rodar

```
npm run dev
```

## 🔎 Endpoint

### GET /api/ceps/:cep

Consulta CEP na BrasilAPI

Exemplo:

```
GET /api/ceps/01001000
```

Resposta:

```json
{
  "cep": "01001000",
  "state": "SP",
  "city": "São Paulo",
  "neighborhood": "Sé",
  "street": "Praça da Sé"
}
```

## ✅ Testes

Rodar testes:

```
npm test
```

Tipos de testes:

- Unitários
- Integração
- Mock HTTP com Nock

## 🧪 Cobertura de testes

Testado:

- Validação de CEP
- Controller
- Integração com BrasilAPI
- Tratamento de erro
- Resposta 404
- Resposta 400

## 🌎 API externa utilizada

https://brasilapi.com.br/docs#tag/CEP-V2

## 📁 Estrutura do projeto

```
src/
  routes/
  controllers/
  services/
  utils/
  middlewares/

tests/
  unit/
  integration/
```

## 📌 Melhorias futuras

- Swagger
- Docker
- Redis cache
- Rate limit
- CI/CD
