
let registros = []
let arrayPags = []

function registrarLivro(){
    let nomeLivro = document.querySelector("#nomeLivro").value
    let nomeAutor = document.querySelector("#nomeAutor").value
    let numPags = parseInt(document.querySelector("#numPags").value)

    class Livro{
        constructor(nome, autor, pags){
            this.nome = nome
            this.autor = autor
            this.pags = pags
        }

        contarPaginas(){
            let divPalavras = document.querySelector("#contagemPags")
            let palavra = document.querySelector("#contagemPaginas")
            divPalavras.style.cssText = 
                'display:block;'
            var soma = 0
            for (let i = 0; i < arrayPags.length; i++){
                soma += arrayPags[i]
            }
            palavra.innerHTML = `Total de páginas lidas em 2023: ${soma}`
        }
    }

    var novoLivro = new Livro(nomeLivro, nomeAutor, numPags)
    registros.push(novoLivro)
    console.log(registros)

    arrayPags.push(novoLivro.pags)
    console.log(arrayPags)

    document.querySelector("#nomeLivro").value = ""
    document.querySelector("#nomeAutor").value = ""
    document.querySelector("#numPags").value = ""

    tabelarLivro()
    novoLivro.contarPaginas()
}

function tabelarLivro(){

    var tabela = document.querySelector("#tb-Livros")

    while (tabela.rows.length > 0) {
        tabela.deleteRow(0);
    }
    
    for (let i = 0; i < registros.length; i++){
        let row = tabela.insertRow()

        let codigo = row.insertCell(0)
        let nomeLivros = row.insertCell(1)
        let autor = row.insertCell(2)
        let pags = row.insertCell(3)

        codigo.innerHTML = i+1
        nomeLivros.innerHTML = registros[i].nome
        autor.innerHTML = registros[i].autor
        pags.innerHTML = registros[i].pags
    }

}