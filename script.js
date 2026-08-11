let oi = true;
function AlterarTexto() {
    if (oi) {
        document.getElementById("mensagem").innerText = "Ligado";
    } else {
        document.getElementById("mensagem").innerText = "Desligado";
    }
    oi = !oi;
}



function ValidarEmail() {
    const email = document.getElementById("email").value;
    const resultado = document.getElementById("email-resultado");
    if (email.includes("@")) {
        resultado.innerText = "E-Mail Certo";
        resultado.className = "sucesso";
    } else {
        resultado.innerText = "E-Mail Incorreto";
        resultado.className = "erro";
    }
}

function AlterarEstilo() {
    const caixa = document.getElementById("caixa");
    const botao = document.getElementById("botao");

    caixa.classList.toggle("destaque");
    caixa.innerText = "O texto dessa caixa foi alterado";

    if (caixa.classList.contains("destaque")) {
        botao.innerText = "Desligar tema escuro";
    } else {
        botao.innerText = "Ligar tema claro";
    }
}

function AnimarBolinha() {
    const bolinha = document.getElementById("bolinha");

    if (bolinha.classList.contains("inicio")) {
        bolinha.classList.remove("inicio")
        bolinha.classList.toggle("mover-direita")
    }
    
    if (bolinha.classList.contains("mover-direita")) {
        bolinha.classList.remove("mover-direita")
        bolinha.classList.toggle("mover-esquerda")
    }
}

let contarcliques = 0 

function ContarClique() {
    contarcliques++;
    document.getElementById("contador").innerText = contarcliques
}

function BuscarDados() {
    const resposta = document.getElementById("resposta-api")

    resposta.innerText = "Aguardando resposta..."

    setTimeout(function() {
        resposta.innerText = '{\n"id": 1,\n "nome": Mauri,\n "status": "Eletricista Ladrão"\n}';}, 1000)
}