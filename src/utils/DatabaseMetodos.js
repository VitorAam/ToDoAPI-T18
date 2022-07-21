import { Database } from "../infra/Database.js";

class DatabaseMetodos{
    static listarTodoOBanco(){
        return Database
    }

    static listarTodosUsuarios(){
        return Database.Usuarios
    }

    static inserirUsuario(usuario){
        Database.Usuarios = [...Database.Usuarios, usuario]
        return Database.Usuarios
    }

    static deletaUsuarioPorId(id) {
        const usuarios = Database.Usuarios.filter((usuario, index) => {
            return id != index
        })
        Database.Usuarios = usuarios
        return {id: id, sucess: "Usuário excluído com sucesso"}
    }
}

export default DatabaseMetodos