// 'use strict'


//Inicializando os modulos necessarios...
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

//Criando o app a partir do express
const app = express();
//Criando a porta de comunicação com o servidor
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Criando o servidor...
const server = http.createServer(app);
//Criado router para o gerenciamento de rotas...
const router = express.Router();

//Criando uma rota e recebendo uma resposta...
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

server.listen(port, () => {

    console.log("Api rodando na porta:" + port);

});

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    else if(port > 0){
        return port;   
    }

    return false;
}
