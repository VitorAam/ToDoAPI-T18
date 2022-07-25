import DatabaseMetodos from "..utils/DatabaseMetodos.js";
import { Database } from "./Database";

const usuario = {
    nome: "Vitor Augusto",
    email: "vitor.oom@hotmail.com",
    telefone: "81996568347"
}

try {
    const tabela = await DatabaseMetodos.createTable()
    console.log(tabela);

    const criada = await DatabaseMetodos.inserirUsuario(usuario)
    console.log(criada)
} catch (e) {
    console.log(e)
}