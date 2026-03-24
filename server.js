const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

let memory = [];

app.post("/chat",(req,res)=>{

let msg = req.body.message.toLowerCase();
let response = "Todavía estoy aprendiendo.";

if(msg.includes("hola")){
response = "Hola 👋 ¿Cómo estás?";
}

else if(msg.includes("como estas")){
response = "Estoy bien 😄";
}

else if(msg.includes("quien te creo")){
response = "Me creó soyadrianyt001";
}

else if(msg.includes("creame un codigo")){

response = `Aquí tienes un ejemplo de código:

HTML básico:

<html>
<head>
<title>Ejemplo</title>
</head>
<body>

<h1>Hola mundo</h1>

</body>
</html>`;

}

memory.push({user:msg,bot:response});

fs.writeFileSync("memory.json",JSON.stringify(memory,null,2));

res.json({reply:response});

});

app.listen(3000,()=>{
console.log("Adrian AI servidor activo");
});
