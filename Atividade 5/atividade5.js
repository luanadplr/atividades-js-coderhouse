function calculoParcela(){

    var v = parseFloat(document.querySelector("#valor").value)
    var p = parseFloat(document.querySelector("#parcelas").value)
    var resultado = document.querySelector("#resultado")

    for(let i = 1; i <= p; i++){
        let calculo = v/i
        resultado.style.cssText =
            'display:block; height:350px; width:350px; margin:20px auto 0 auto; text-align:center;padding-top:10px'
        if(i > 1){
            resultado.append(`Em ${i}x vezes: R$${calculo.toFixed(2)}\n\n`)
        }
    }
    
}