var resultado = document.querySelector("#resultado")
function saoMultiplos(){
    var n1 = parseInt(document.querySelector("#n1").value)
    var n2 = parseInt(document.querySelector("#n2").value)
    if(n1%n2==0){
        resultado.innerHTML = `Os números ${n1} e ${n2} são múltiplos.`
    } else{
        resultado.append(`Os números ${n1} e ${n2} NÃO são múltiplos.`)
    }
}

function limpar(){
    resultado.innerHTML=""
}