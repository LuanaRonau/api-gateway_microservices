// Inicia o Express.js//
const express = require('express');
const app = express();

// Body Parser - usado para processar dados da requisição HTTP
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Inicia o Servidor na porta 8085
let porta = 8085;
app.listen(porta, () => {
 console.log('Servidor em execução na porta: ' + porta);
});


// Método HTTP POST /Catraca - imprime a abertura da catraca
app.post('/Catraca', (req, res) => {
    const id_estacionamento = req.body.id_estacionamento
    console.log(`Abre cancela do estacionamento ${id_estacionamento}!`)
    res.status(200).send(`Abre cancela do estacionamento ${id_estacionamento}!`)
});
