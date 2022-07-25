import Database from "../infra/Database.js";

class DatabaseMetodos {
    static activePragma() {
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (e)=> {
            if(e) {
                console.log(e)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    }

    static crateTable() {
        this.activePragma()

        const query = `
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )`

        return new Promise((resolve, reject)=>{
            Database.run(query, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela usuário criada com sucesso")
                }
            })
        })
    }

    static inserirUsuario(usuario){
        const query = `INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)`
        const body = Object.values(usuario)
        return new Promise ((resolve, reject) => {
            Database.run(query, [...body], (e)=>{
                if(e){
                    reject(e.message)
                } else{
                    resolve({error: false, message: "Usuário cadastrado com sucesso!"})
                }
            })
        })
    }
}

export default DatabaseMetodos