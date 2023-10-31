const montaCadastro = () =>{

    const cadastroPaciente ={
        nome: document.getElementById("nomePaciente").value,
        nascimento: document.getElementById("nasc").value,
        sexo: document.getElementById("radioMasculino").checked ? 1 : 2,
        mae: document.getElementById("mae").value,
        pai: document.getElementById("pai").value,
        tel1: document.getElementById("tel1").value,
        tel2: document.getElementById("tel2").value,
        cpf: document.getElementById("cpf").value,
        rg: document.getElementById("rg").value,
        cep: document.getElementById("cep").value,
        nCasa: document.getElementById("nCasa").value,
        logradouro: document.getElementById("logradouro").value,
        complemento: document.getElementById("complemento").value
    }

    return cadastroPaciente
    

}