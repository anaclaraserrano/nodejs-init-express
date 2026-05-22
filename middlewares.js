const express = require('express')
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/produtos", (req, res)=>{
   res.json({
    mensagem: "Middleware utilizado"
   });
});

//Utilizando middleware
//next = meio que liberando pra continuar
function logger(req, res, next) {
    console.log (req.method, req.url);
    next();
}

app.use(logger);

//Porta definida para iniciar o servidos
app.listen (PORT, () => {
console.log (`Servidor funcionando em http://localhost:${PORT}`);
});