var grupoFav = prompt("Qual é seu grupo favorito de K-POP?")
var anoDebut = prompt("Qual ano do seu debut?")

if(anoDebut>=1992&&anoDebut<=2003){
    alert(`Ah você está velho! Seu grupo favorito ${grupoFav} debutado em ${anoDebut} é um grupo da 1º Geração!`)
} else if(anoDebut>=2004&&anoDebut<=2012){
    alert(`Como é gostar dos melhores?! Seu grupo favorito ${grupoFav} debutado em ${anoDebut} é um grupo da 2º Geração!`)
} else if(anoDebut>=2005&&anoDebut<=2019){
    alert(`Talvez você esteja ficando velho... Seu grupo favorito ${grupoFav} debutado em ${anoDebut} é um grupo da 3º Geração!`)
} else{
    alert(`O universo do K-POP está apenas começando! Seu grupo favorito ${grupoFav} debutado em ${anoDebut} é um grupo da 4º Geração!`)
} 

