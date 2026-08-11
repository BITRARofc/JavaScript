const Jogos = [
    {
        id: 1,
        game: "GTA 6",
        preco: 549.90,
    },
    {
        id: 2,
        game: "Dead By Daylight",
        preco: 139.90,
    },
    {
        id: 3,
        game: "Marvel's Spider-Man",
        preco: 149.90,
    },
    {
        id: 4,
        game: "The Last Of Us",
        preco: 179.90,
    },
];

const nomeCliente = document.getElementById("nome")
const produtos = document.getElementById("produto")
const quantidade = document.getElementById("qtnd")
const entrega = document.getElementById("entrega")
const retirada = document.getElementById("retirada")

function inserirJogos() {
    Jogos.forEach(jogo => {
        const option = document.createElement("option")
        option.value = jogo.id
        option.textContent = jogo.game
        produtos.appendChild(option)
    });
}

function carrinhoPadrao() {
    console.log(document.getElementById(".cAtivado"));
    
    if (!document.getElementById(".cAtivado")) {
        document.querySelector(".calculado").innerHTML = `<p id="remover">Preencha os dados e clique em <span id="destacar">Calcular Pedido</span></p>`
    }
}

function mostrarPreview() {
    if (!document.querySelector(".cAtivado")) {
        document.getElementById("remover").remove()
        document.querySelector(".calculado").classList.add("cAtivado")
    }
}

function calcularValor() {

    let prosseguir = true
    
    if (!nomeCliente.value) {
        console.log("Sem Nome");
        prosseguir = false
    }

    if (!produtos.value) {
        console.log("Sem Produto");
        prosseguir = false
    }
    
    if (!quantidade.value) {
        console.log("Sem Quantidade");
        prosseguir = false
    }
    
    if (!entrega.checked && !retirada.checked) {
        console.log("Sem Modalidade Selecionada");
        prosseguir = false
    }

    if (!prosseguir) {
        return
    }
    
    Jogos.forEach(item => {
        if (Number(produtos.value) === item.id) {
            const subtotal = item.preco * quantidade.value
            mostrarPreview()
        }
    });
}

inserirJogos()
carrinhoPadrao()