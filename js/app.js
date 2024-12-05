let valorTotal = 0;
let quantidadeTotal = 0;

document.getElementById("lista-produtos").innerHTML = " ";
document.getElementById("valor-total").innerHTML = "$ 0";
document.getElementById("quantidade").value = 1;
document.getElementById("carrinho__total__itens").innerHTML = "(0 itens)";

function adicionar() {
    //Pegar valores, nome do produto, quantidade e valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("$")[1];
    let quantidade = parseInt(document.getElementById("quantidade").value);

    quantidadeTotal += quantidade;
    let cart = document.getElementById("carrinho__total__itens");
    cart.innerHTML = `(${quantidadeTotal} itens)`
    // Calcular o preço
    let valor = valorProduto * quantidade;
    // Add ao carrinho
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">$${valor}</span>
    </section>`;
    //Atualizar valor total
    valorTotal += valor;
    let valorCompras = document.getElementById("valor-total");
    valorCompras.innerHTML = `$ ${valorTotal}`;
    document.getElementById("quantidade").value = 1;
}


function limpar(){
    valorTotal = 0;
    document.getElementById("lista-produtos").innerHTML = " ";
    document.getElementById("valor-total").innerHTML = "$ 0";
    document.getElementById("carrinho__total__itens").innerHTML = "(0 itens)";
}