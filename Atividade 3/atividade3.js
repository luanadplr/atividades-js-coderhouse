

function calculoDolar(){
    var cotacao = (a) => a*5.0528
    var spread = (a) => a+(a*0.04)
    var iof = (a) => a+(a*0.0638)
    var preco = parseInt(prompt("Digite o valor da sua compra (USD):"))
    preco = cotacao(preco), spread(preco), iof(preco)
    alert(`Sua compra em reais será aproximadamente: R$${preco.toFixed(2)}\nCotação do dólar: R$5,0528 | Spread: 4% | IOF: 6,38%`)
}
