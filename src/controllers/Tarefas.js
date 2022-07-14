import TarefasModel from "../models/TarefasModel.js"


class Tarefas{
    static rotas(app){
        app.get("/tarefas", (req,res)=>{
            const tarefa = new TarefasModel('Fazer codewars', 'fazer 135 pontos')
            res.send(tarefa)
        })
    }
}

export default Tarefas;