const express = require('express'); // im porta o express

const app = express(); // criação da aplicação

const PORT = 3000; //definindo a porta do servidor

app.use(express.json()); // permite interpretar JSON

function logger(req, res, next) { //middleware de log
    console.log(req.method, req.url); // Exibe o método e a url acessada
    next();// continua a execução
};

app.use(logger); //aplica o middleware em todas as rotas

//Middleware de validação de senha
function verificarAcesso(req, res, next) {

    //query = dados de envio atraves da url
    const senha = req.query.senha;
    if(senha === '1234'){
        next();
    }else {
        res.status(403).json({
            mensagem:"Acesso negado, senha incorreta!"
        });
    }
}

let produtos = [
    {id:1, nome: "Army bomb", preco: 200},
    {id:2, nome: "album bts", preco: 100} 
];

//Rota inicial
app.get("/", (req, res) => {
    res.end("Servidor express funcionando");
});

//Busca de produtos
app.get("/produtos", (req, res) => {
    res.json({
        ListaProdutos: produtos
    });server-complete.js
});

//Bucan de produtos pelo ID da URL
app.get ("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        mensagem: "Produto encontrado",
        id: produtos[id-1]
    });
});


//cadastrar um novo post
app.post("/produtos", (req, res) => {
    const novoProduto = req.body; // captura dos dados enviados no body da requisição
    produtos.push(novoProduto); // envia o novo pedido para o array de produtos

    res.json({
        mensagem: 'Produto cadastrado com sucesso',
        produto: novoProduto
    });
});

//atualizando um produto existente
app.put("/produtos", (req,res ) => {
    const dadosAtualizados = req.body;
    produtos = produtos.map(produto => {
        if( produto.id === dadosAtualizados.id){
        
        return {
            ...produto,
            preco: dadosAtualizados.preco
        }
    }
    return produto;
    })
    res.json({
    ListaProdutos: produtos
})
});

//deletar um produto existente
app.delete ("/produto", (req, res) => {
    const produtoDeletado = req.body;

    //fimdIndex= encontra a posição de um produto
    const produto = produtos.findIndex(produto => produto.id === produtoDeletado.id)
    if(produto > -1) {

        //produto = posição do produto
        //1 = quantidade que vai apagar
           produtos.splice(produto ,1);
    }
    res.json({
        mensagem: "Produto deletado",
        ListaProdutos: produtos
    })
})

//Rota protegida

app.get("/admin", verificarAcesso, (req,res) => {
    res.json({
        mensagem:'Srea administrativa acessada'
    });
});



//Declaradno a porta
app.listen (PORT, () => {
    console.log( "Server running into http://localhost:3000");
})

