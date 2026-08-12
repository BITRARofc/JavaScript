const Jogos = [
    {
        id: 1,
        game: "GTA 6",
        preco: 549.90,
    },
    {
        id: 2,
        game: "Dead By Daylight",
        preco: 100,
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

function pegarProduto() {
    const id = Number(produtos.value);
    return Jogos.find((produtos) => produtos.id === id);
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
} 

function mostrarPreview() {
    const produto = pegarProduto()
    let subtotal
    let desconto = 0
    let total
    const modalidade = document.querySelector('input[name="modalidade"]:checked')

    Jogos.forEach(item => {
        if (Number(produtos.value) === item.id) {
            subtotal = item.preco * quantidade.value;
        }
    });
    
    if (subtotal >= 100) {
        desconto = subtotal*0.10
        total = subtotal - desconto
    }

    if (modalidade.value === "Entrega") {
        total += 8
    }

    total = formatarMoeda(total)
    desconto = formatarMoeda(desconto)
    subtotal = formatarMoeda(subtotal)
    const precop = formatarMoeda(produto.preco)

    if (!document.querySelector(".cAtivado")) {
        document.querySelector(".calculado").classList.add("cAtivado")
    }
    
    document.querySelector(".calculado").innerHTML = `<div class="espaco">
                                <p id="destacar">Nome do Cliente: </p>
                                <span>${nomeCliente.value}</span>
                            </div>
                            <hr>
                            <div class="espaco">
                                <p id="destacar">Produto: </p>
                                <span>${produto.game}</span>
                            </div>
                            <hr>
                            <div class="espaco">
                                <p id="destacar">Preço do Produto: </p>
                                <span>${precop}</span>
                            </div>
                            <hr>
                            <div class="espaco">
                                <p id="destacar">Forma de Entrega: </p>
                                <span>${modalidade.value}</span>
                            </div>
                            <hr>
                            <div class="espaco">
                                <p id="destacar">Subtotal: </p>
                                <span>${subtotal}</span>
                            </div>
                            <hr>
                            <div class="espaco">
                                <p id="destacar">Desconto: </p>
                                <span>${desconto}</span>
                            </div>
                            <hr>
                            <div class="espaco total">
                                <p id="destacar">Total: </p>
                                <span>${total}</span>
                            </div>`

    
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

    mostrarPreview()
}

inserirJogos()