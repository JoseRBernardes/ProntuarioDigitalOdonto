// ELEMENTOS DA PAGINA INDEX
const btnCadastrar = document.getElementById("btnCadastrar")
const inputCep = document.getElementById("cep")


//FUNCOES DA PAGINA INDEX
const cadastrarPaciente = () =>{
    console.dir(montaCadastro())
}

const  procurarLogradouro = async ()=>{

    if(inputCep.value.length > 0){
     await requestBucasporCep(inputCep.value)
    }
}


//EVENTOS DOM
btnCadastrar.addEventListener('click', cadastrarPaciente)
inputCep.addEventListener('blur', procurarLogradouro)


