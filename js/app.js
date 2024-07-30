let total;
zerar()



function adicionar() {

    // recuperar valores: nome, qtd e valor
    let produto = document.getElementById('produto').value;
    
    // usa o split para quebrar a string com um determinado separador
    // nome do produto
    let nomeProduto = produto.split('-')[0];
    // valor do produto
    let valorProduto = produto.split('R$')[1];
    let qtdProduto = document.getElementById('quantidade').value;
    if (qtdProduto <= 0) {
        alert("Você deve inserir a quantidade do produto.")
        return;
    }
    
    // calcular preço por produto qtd * valor
    let preco = qtdProduto * valorProduto;
    //let preco = parseInt(qtdProduto) * parseFloat(valorProduto);
  
    



    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    // innerHTML pois o próprio html será alterado no trecho do section
    // concatenando o carrinho consigo listar os produtos
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${qtdProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;

    
    // valor total da compra
    total = total + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${total}`;  
    document.getElementById('quantidade').value = 0;  
    
    
    

}

function limpar() {
    zerar()
}

function zerar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = "";
    document.getElementById('valor-total').textContent= `R$${0}`;
    document.getElementById('quantidade').value = 0;
    
}