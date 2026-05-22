//primeiros passos para criação de um servidor com express:
//abrir o terminal e dar os seguintes comandos:
//npm init -y (para inicializar o npm)
//npm install express (para a instalação das dependencias do framework express)

//importa a biblioteca express parav dentro do projeto
const express = require ('express');

//cria a aplicação express
const app = express();

const PORT= 3000; //porta do servidor

//middleware nativo do express que permite a nossa aplicação interpretar dados enviados em json.
app.use(express.json());

//criação de uma rota com metodo GET
app.get("/", (req, res)=>{
    res.send("servidor express funcionando")
});

app.listen(PORT, ()=>{
    console.log(`servidor funcionando em http://localhost:${PORT}`)
}) 