function mostrarmapa(){
    let local = document.getElementById("localizacao")
    local.style.display = 'block'
}

function fecharmapa(){
    let ocultar = document.getElementById("localizacao")
    ocultar.style.display = 'none'
}

function verrecado(){
   let contprinc = document.getElementById("site")
    let recado = document.getElementById("recado-horario")
    recado.style.display = 'block'
    contprinc.style.display = 'none'
}

function fecharrecado(){
    let contprinc = document.getElementById("site")
    let recado = document.getElementById("recado-horario")
    recado.style.display = 'none'
    contprinc.style.display = 'block'
}

