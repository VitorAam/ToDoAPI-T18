import express from "express";
import * as dotenv from "dotenv"
import Usuarios from "./src/controllers/Usuarios.js"
import Tarefas from "./src/controllers/Tarefas.js"

dotenv.config()


/**
 * Definindo uma variável para a porta que deixará nossa aplicação disponível
 * O comando 'process.env' serve para acessar variável de ambiente, util quando chegar o momento de subir a aplicação
 */
const port =  process.env.PORT || 3002;


const app = express()

app.listen(port, ()=>{
    console.log(`Servidor online no endereço http://localhost:${port}`)
})
/**
 * Chamada do método de controle de rotas do Controller Usuários
 * Nessa chamada passamos a váriavel app, que armazena nosso express como parametro
 * Assim o arquivo presente no controller consegue acessar utilizar o nosso express
 */

app.use(express.json())

Usuarios.rotas(app)
Tarefas.rotas(app)
