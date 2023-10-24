function acenderLampada(){
    imgLampada.src = "imgs/ligada_sem_fundo.png"
}

function apagarLampada(){
    imgLampada.src = "imgs/desligada_sem_fundo.png"
}

function acenderTela(){
    document.body.style.backgroundColor = "#FFFFFF"
    linkVoltar.style.cssText = "none"
}

function apagarTela(){
    document.body.style.backgroundColor = "#000000"
    linkVoltar.style.cssText = "color:#FFFFFF"
}