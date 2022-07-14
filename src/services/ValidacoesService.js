class ValidacoesService{
    static validaNome(nome){
        return nome.length >= 3
    }

    static validaTelefone(telefone){
        return telefone.length >= 9
    }
}

export default ValidacoesService