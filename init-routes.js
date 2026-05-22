//Rotas no express

//Formatação de rota+metodo com oexpress:
//app.metodo("caminho", função)
//onde:
//app => aplica express
//metodo -> tipo de requisição http (get, post, put, delete)
//caminho -> rota
//função -> o que será executado quando a rota for acessada

const express = require('express')
const app = express();
const PORT = 3000;
app.use(express.json())


// metodos get com rotas de produtos e usúarios
app.get("/produtos", (req, res) => {
    res.json ([
        {id:1, nome: "Notebook", preco: 2000},
        {id:2, nome: "livro", preco: 50}
    ]);
});

app.get("/usuarios", (req, res) => {
    res.json ([
        {id:1, nome:"Fernanda"},
        {id:2, nome:"Luana"}
    ]);
});

//método POST com rota de produtos
app.post("/produtos", (req,res ) => {
    const novoProduto = req.body;
    res.json({
        mensagem: "Produto cadastrado com sucesso",
        produto: novoProduto
    });
});

//metodo PUT para a rota produtos
app.put("/produtos/:id", (req, res) =>{

    //Captura o ID da requisição
    const id = req.params.id;

    const dadosAtualizados = req.body;

    res.json({
        mensagem: "Produto atualizado com sucesso",
        id: id,
        dados: dadosAtualizados
    });
});

// metodo delete com rota produtos
app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.json ({
        mensagem: "Produto removido com sucesso",
        id: id
    })
})




//Porta definida para iniciar o servidos
app.listen (PORT, () => {
console.log (`Servidor funcionando em http://localhost:${PORT}`);
});