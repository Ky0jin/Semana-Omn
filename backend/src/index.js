const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
 Rota / Recurso
*/

/*
    Metodos HTTP:
    GET: Buscar/Listar uma info do backend
    POST: Criar uma info no backend
    PUT: Alterar uma info no backend
    DELETE: Deletar uma info no backend
*/

/*
    Tipos de parametros:

    Query: Parametros nomeados enviados na rota apos o simbolo "?" (filtros, paginacao)
    Route Params: Parametros utilizados para identificar recursos
    Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, SQLite, PortgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
*/

/*
  Driver: SELECT * FROM users
  Query Builder: table('users').select('*').where();
  
*/



app.listen(3333);