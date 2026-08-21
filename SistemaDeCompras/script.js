const Jogos = [
    {
        id: 1,
        game: "GTA 6",
        preco: 549.90,
    },
    {
        id: 2,
        game: "Dead By Daylight",
        preco: 249.90,
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

const nomeCliente = document.getElementById("nome");
const produtos = document.getElementById("produto");
const quantidade = document.getElementById("qtnd");
const entrega = document.getElementById("entrega");
const retirada = document.getElementById("retirada");
const cardCompra = document.querySelector(".calculado");
const contadora = document.getElementById("contadora");
const finalizado = document.querySelector(".finalizado");
const informacoes = document.querySelector(".informacoes");

function inserirJogos() {
    Jogos.forEach(jogo => {
        const option = document.createElement("option")
        option.value = jogo.id
        option.textContent = jogo.game
        produtos.appendChild(option)
    });
}

function limparItems() {
    const modalidade = document.querySelector('input[name="modalidade"]:checked')

    nomeCliente.value = ""
    produtos.value = "default"
    quantidade.value = null
    modalidade.checked = false
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

let subtotal;
let desconto = 0;
let total = 0;
let precop;

function mostrarPreview() {
    document.querySelector(".disabled").classList.remove("disabled");

    finalizado.style.display = "none";

    const produto = pegarProduto();
    const modalidade = document.querySelector('input[name="modalidade"]:checked');

    Jogos.forEach(item => {
        if (Number(produtos.value) === item.id) {
            subtotal = item.preco * quantidade.value;
        };
    });
    

    if (subtotal >= 400) {
        desconto = subtotal*0.10
        total = subtotal - desconto
    } else {
        total = subtotal
    };

    if (modalidade.value === "Entrega") {
        total += 8
        entregaV = "Entrega + R$8,00"
    } else {
        entregaV = "Retirada + R$0,00"
    };

    total = formatarMoeda(total);
    desconto = formatarMoeda(desconto);
    subtotal = formatarMoeda(subtotal);
    precop = formatarMoeda(produto.preco);

    if (!cardCompra.classList.contains("cAtivado")) {
        cardCompra.classList.add("cAtivado")
    };
    
    cardCompra.innerHTML = `<div class="espaco">
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
                                <span>${entregaV}</span>
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
                            </div>`;

    
}

function testarInputs() {

    let prosseguir = true;
    
    if (!nomeCliente.value) {
        document.querySelector(".erron").textContent = "Digite seu nome!";
        prosseguir = false
    };
    
    if (!produtos.value || produtos.value === "default") {
        document.querySelector(".errop").textContent = "Selecione um produto!";
        prosseguir = false
    };
    
    if (!quantidade.value) {
        document.querySelector(".erroq").textContent = "Digite a quantidade!";
        prosseguir = false
    };
    
    if (!entrega.checked && !retirada.checked) {
        document.querySelector(".errof").textContent = "Selecione a forma de entrega!";
        prosseguir = false
    };

    if (!prosseguir) {
        return
    };

    const erros = document.querySelectorAll(".erro");

    erros.forEach(mensagem => {
        mensagem.textContent = "";
    });

    mostrarPreview();
}

function novoPedido() {
    if (document.querySelector(".disabled")) {
        return
    };

    document.querySelector(".conf").classList.add("disabled");

    if (cardCompra.classList.contains("cAtivado")) {
        cardCompra.classList.remove("cAtivado")
    };
    
    cardCompra.innerHTML = `<p>Preencha os dados e clique em <span id="destacar">Calcular Pedido</span></p>`;

    limparItems();

}

let num = 1;
function confirmarPedido() {

    if (document.querySelector(".disabled")) {
        return;
    };

    if (!cardCompra.classList.contains("cAtivado")) {
        return;
    };
    
    finalizado.style.display = "flex";

    const produto = pegarProduto();

    contadora.textContent = num;
    num += 1;

    informacoes.classList.add("cAtivado")

    informacoes.innerHTML = `<div class="espaco">
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
                                <span>${entregaV}</span>
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
                            </div>`;
    
    informacoes.scrollIntoView({
        behavior: 'smooth'
    });
    
    novoPedido()
}

inserirJogos()