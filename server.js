

/* Chamada dos pacotes que vamos precisar para a nossa aplicação */
var express     = require('express'); //chamando o pacote express
var app         = express(); //definção da nossa aplicação através do express
var bodyParser  = require('body-parser');  //chamando o pacote body-parser
var mongoose    = require('mongoose');
var Usuario     = require('./models/usuario');

mongoose.connect('mongodb://root:di900824@ds139242.mlab.com:39242/crudnode'); //via Modulus

/** Configuração da variável 'app' para usar o 'bodyParser()'.
 * Ao fazermos isso nos permitirá retornar os dados a partir de um POST
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Definição da porta onde será executada a nossa aplicação */
var port = process.env.PORT || 3000;

//Rotas da nossa aplicação

/* Aqui o 'router' irá pegar as instâncias das Rotas do Express */
var router = express.Router();

/* Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão */
router.use(function(req, res, next) {
    console.log('Rodando nossa aplicação');
    next(); //aqui é para sinalizar de que prosseguiremos para a próxima rota.
});

/* Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:3000/) */
router.get('/', function(req, res) {
    res.json({ message: 'Tudo funcionando perfeitamente' });
});

// Rotas que irão terminar em '/usuarios' - (servem tanto para: GET All & POST)
router.route('/usuarios')

 

/* Todas as nossas rotas serão prefixadas com '/api' */
app.use('/', router);

//Iniciando o Servidor (Aplicação):
//==============================================================
app.listen(port);
console.log('Aplicação rodando na porta ' + port);