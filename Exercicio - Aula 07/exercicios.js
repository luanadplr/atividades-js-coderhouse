// EXERCICIO #1

var div = document.querySelector("#ex1-res")
var resultado = document.querySelector("#ex1-r")
function parImpar(){
    var n1 = document.querySelector("#ex1-numero").value
    div.style.cssText = 
        'display:block;'
    if (n1%2==0){
            resultado.innerHTML = `O número ${n1} é par.`
    } else{
        resultado.innerHTML = `O número ${n1} é ímpar.`
    }
}

// EXERCICIO #2

function estacaoAno(){
    let div = document.querySelector("#ex2-res")
    let selecao = parseInt(document.querySelector("#meses").value)
    let resultado = document.querySelector("#ex2-r")
    div.style.cssText = 
        'display:block;'
    if(selecao == 12 || selecao == 1 || selecao == 2 || selecao == 3){
        resultado.innerHTML = `Neste mês é Verão!`;
    } else if (selecao == 4 || selecao == 5 || selecao == 6){
        resultado.innerHTML = `Neste mês é Outono!`;
    } else if (selecao == 7 || selecao == 8 || selecao == 9){
        resultado.innerHTML = `Neste mês é Inverno!`;
    } else {
        resultado.innerHTML = `Neste mês é Primavera!`;
    }
}

// EXERCICIO #3

function celsiusF(){
    let div = document.querySelector("#ex3-res")
    div.style.cssText = 
        'display:block;'
    let resultado = document.querySelector("#ex3-r")
    let valor = parseFloat(document.querySelector("#ex3-numero").value)
    let conta = (valor-32)/1.8
    resultado.innerHTML = `${valor}Fº equivale a ${conta.toFixed(1)}Cº`
}