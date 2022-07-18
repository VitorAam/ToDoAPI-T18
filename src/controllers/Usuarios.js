import UsuarioModel from "../models/UsuarioModel.js";
import ValidacoesService from "../services/ValidacoesService.js";


class Usuarios{
    static rotas(app){
        app.get("/usuarios", (req,res)=>{
            const nome = 'Vitor'
            const telefone = '998857684'
            const isValid = ValidacoesService.validaNome(nome) && ValidacoesService.validaTelefone(telefone)
            if(isValid){
                const usuario = new UsuarioModel('Vitor', 'vitor.oom@gmail.com', '996568347')
                res.send("Rota usuários!")
            } else {
                res.status(400).send('Erro')
            }
        })
    }
}

export default Usuarios;