//middleware de acesso
//ele será usado para realizar uma autenticação

const express = require('express'); //Importando o express

const app = express(); // criando a aplicação

const PORT = 3000; // definindo a porta do servidor

app.use(express.json()); //nos permite interpretar JSON

function verificarAcesso(req, res, next){
    const autorizado=false; //Simulação de acesso
    //true: acesso liberado
    //false: negar o acesso

 if(autorizado){
    next();
    } else{
        res.status(403).json({
            mensagem:"acesso negado"
        });
    }
 
}

// Incluindo o Middleware na rota 

 
app.get("/admin", verificarAcesso, (req, res)=>{
    res.json({
        mensagem:"Área admisnistrativa acessada!"
       
    });
});
 
app.listen(PORT,()=>{
  console.log("server running into http://localhost:3000");
});