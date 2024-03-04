function mostrarmapa(){
    let local = document.getElementById("localizacao")
    local.style.display = 'flex'
}

function fecharmapa(){
    let ocultar = document.getElementById("localizacao")
    ocultar.style.display = 'none'
}

function verrecado(){
    let tabela = document.getElementById("tabela")
    let recado = document.getElementById("recado")
    let recadoetabela = document.getElementById("horarios-funcionamento")
    let botaodeocultar = document.getElementById("ocultar-recado")
    recado.style.display = 'block'
    recadoetabela.style.display = 'none'
    tabela.style.display = 'block'
    botaodeocultar.style.display = 'block'
}

function fecharrecado(){
    let tabela = document.getElementById("tabela")
    let recado = document.getElementById("recado")
    let recadoetabela = document.getElementById("horarios-funcionamento")
    let botaodeocultar = document.getElementById("ocultar-recado")
    recado.style.display = 'none'
    tabela.style.display = 'none'
    recadoetabela.style.display = 'flex'
    botaodeocultar.style.display = 'none'
}

function exibirprecos(){
    let tabela = document.getElementById("precos")
    tabela.style.display = 'flex'
}

function fecharprecos(){
    let tabeladeprecos = document.getElementById("precos")
    tabeladeprecos.style.display = 'none'    
}

