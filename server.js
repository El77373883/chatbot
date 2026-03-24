const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())
app.use(express.static("."))

let mensajes=[]

if(fs.existsSync("mensajes.json")){
mensajes=JSON.parse(fs.readFileSync("mensajes.json"))
}

app.post("/chat",(req,res)=>{

let msg=req.body.message.toLowerCase()

let reply="Todavía estoy aprendiendo 🤖"

if(
msg.includes("hola") ||
msg.includes("homa") ||
msg.includes("ola") ||
msg.includes("holaa") ||
msg.includes("buenas")
){
reply="Hola 👋 ¿Cómo estás?"
}

else if(msg.includes("como estas")){
reply="Estoy muy bien 😄"
}

else if(msg.includes("que tal")){
reply="Todo bien 👍"
}

else if(msg.includes("quien te creo")){
reply="Me creó soyadrianyt001"
}

else if(msg.includes("crea un codigo")){

reply=`Aquí tienes un ejemplo:

HTML:

<h1>Hola Mundo</h1>

JavaScript:

console.log("Hola Mundo")
`

}

mensajes.push({
usuario:msg,
respuesta:reply
})

fs.writeFileSync("mensajes.json",JSON.stringify(mensajes,null,2))

res.json({reply:reply})

})

app.listen(3000,()=>{
console.log("Adrian AI iniciado en puerto 3000")
})
