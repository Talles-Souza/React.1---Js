var nome = '';

if (typeof localStorage.nome == "undefined") {
    localStorage.nome = prompt("Digite seu nome?");
}

nome = localStorage.nome;

document.getElementById('name').innerHTML = nome;

function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'programador',
        status: 'ativo'
    };
    return novosDados;
}

console.log(cadastroPessoa({ nome: 'Talles', sobrenome: 'Dias' }));