let indice = 0

const imagens = document.getElementsByClassName("foto")
imagens[indice].style.display = 'block'

function anterior() {
    if (indice === 0) {
        imagens[imagens.length - 1].style.display = 'block';
        imagens[indice].style.display = 'none';
        indice = imagens.length - 1; 
    } else {
        imagens[indice].style.display = 'none'; 
        imagens[indice - 1].style.display = 'block'; 
        indice--; 
    }
}
function proximo() {
    if (indice === imagens.length - 1) {
        imagens[0].style.display = 'block';
        imagens[indice].style.display = 'none';
        indice = 0;
    } else {
        imagens[indice].style.display = 'none';
        imagens[indice + 1].style.display = 'block';
        indice++;
    }
}
