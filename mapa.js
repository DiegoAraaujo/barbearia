function mostrarmapa(){
    let local = document.getElementById("localizacao")
    local.style.display = 'block'
}

function fecharmapa(){
    let ocultar = document.getElementById("localizacao")
    ocultar.style.display = 'none'
}

function verrecado(){
    let spaextr = document.getElementById("espextra")
    let recado = document.getElementById("recado-horario")
    recado.style.display = 'block'
    spaextr.style.display = 'block'
}

function fecharrecado(){
    let spaextr = document.getElementById("espextra")
    let recado = document.getElementById("recado-horario")
    recado.style.display = 'none'
    spaextr.style.display = 'none'
}

function fecharrecado2(){
    let recado2 = document.getElementById("recado-horario")
    recado2.style.display = 'none'
}
