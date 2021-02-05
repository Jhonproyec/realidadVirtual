//ESTILOS MENU PEGAJOSO Y MOSTRAR IMAGENES HACIA ARRIBA
let mostrarArriba = document.querySelectorAll('.mostrarArriba');
window.addEventListener('scroll', function(){
    // CAMBIAR DE COLOR EL MENU
    let menu = document.getElementById('menu');
    menu.classList.toggle('cambiarColor', window.scrollY > 0);
    // APARECER LAS IMAGENES
    let desplazamiento = document.documentElement.scrollTop;
    for(i = 0; i < mostrarArriba.length; i++){
        let distancia = mostrarArriba[i].offsetTop;
        if(distancia - 500 < desplazamiento){
            mostrarArriba[i].style.opacity = '1';
            mostrarArriba[i].classList.add('subirImagenes')
        }
    }
})

// EVENTO MOSTRAR MENU
let burger = document.getElementById('amburgesa');
let navegacion = document.getElementById('navegacion');
let titulo = document.getElementById('titulo');
let barras = document.querySelectorAll('.barra');
burger.addEventListener('click', function(){
    // ANIMACION APARECER EL MENU
    this.classList.toggle('mostrar')
    navegacion.classList.toggle('dos');
    // CAMBIAR EL COLOR AL LOGO Y A LAS BARRAS DEL MENU
    titulo.classList.toggle('cambiarTitulo');
    barras.forEach(barra => {
        barra.classList.toggle('cambiarBurger')
    })
})
