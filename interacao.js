function mostrarmapa(){
    let local = document.getElementById("localizacao")
    local.style.display = 'block'
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
    tabela.style.display = 'block'
    recadoetabela.style.display = 'none'
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
