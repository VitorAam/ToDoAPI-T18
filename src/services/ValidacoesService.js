export default class ValidacoesService{
    /**
     * Validação do nome do usuário
     * @param {string} nome 
     * @returns boolean
     */

    static validaNome(nome){
        return nome.length >= 3
    }

    /**
     * Validação de email utilizando regex
     * @param {string} email 
     * @returns boolean
     */

    static validaEmail(email){
        const emailValidado = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
        return emailValidado.test(email)
    }


    /**
     * Validação de telefone utilizando parseint
     * @param {string} telefone 
     * @returns boolean
     */
    static validaTelefone(telefone){
        const telefoneValidado = parseInt(telefone)
        return telefoneValidado == telefone
    }

    /**
     * Validação geral, utilizando os outros três metódos presentes acima
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     * @returns boolean
     */
    static isValid(nome, email, telefone){
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email)
    }
}