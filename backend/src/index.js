const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes.js');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-hkmg3.mongodb.net/week10?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); //Falar para o Express que você vai usar json

/*
    Tipos de parâmetros:
        Query params: request.query (Filtros, ordenação, paginação...)
        Route params: parametros que ficam na rota da url request.params
        Route body: request.body
*/

app.get('/', (request, response)=> {
    return response.json({message: "Kakakakakade"});
});

app.use(routes);

server.listen(3333);

