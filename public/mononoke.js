
const mononoke = document.getElementById('mononoke');
const mensajito = document.getElementById('mensajito')
const body2 = document.body;
const mono = document.getElementById('mono');
//TAMAÑO VENTANA
let coords = mononoke.getBoundingClientRect();
let coordsBody = contenedor.getBoundingClientRect();
let bodyWidth = coordsBody.width-100;
let xRight = coords.right;
let bloqueoMononokeL = bodyWidth - xRight+100;
let bloqueoMononokeR = -xRight+100;

///ANIMACIONES MONONOKE
let velocidad = 10;
let salto = 20;
let velSalto = 20;
let x = 0;
let y = 0;

//BOTON
let body = window.innerWidth;
let boton = document.getElementById('boton');
console.log(boton.offsetLeft)
let posicion = boton.offsetLeft - xRight/2;
console.log('Posicion botón: '+posicion)

mononoke.left = 200;

//Mononoke
document.addEventListener('keydown', (e)=>{
    
    if(e.key == 'd' && x < bloqueoMononokeL){  
    x += velocidad;
    mononoke.style.left = x + "px";
    mononoke.removeAttribute('src');
    mononoke.setAttribute('src', 'images/mononoke.gif')
    }
    
    if(e.key == 'a' && x >= bloqueoMononokeR){
    xRight += velocidad;    
    x -= velocidad;
    mononoke.style.left = x + "px";
    mononoke.removeAttribute('src');
    mononoke.setAttribute('src', 'images/mononoke2.gif')
    }
    if(e.keyCode == 32 && x < bloqueoMononokeL-50 && x > bloqueoMononokeR+10){
        if(mononoke.getAttribute('src') == 'images/mononoke.gif'){
            setTimeout(() => {
            y += salto;
            x += velSalto;
            mononoke.style.left = x + "px";
            mononoke.style.marginBottom = y + "px";
            }, 100);
        } else if(mononoke.getAttribute('src') == 'images/mononoke2.gif') {
        setTimeout(() => {
            y += salto;
        x -= velSalto;
        mononoke.style.left = x + "px";
        mononoke.style.marginBottom = y + "px";
        }, 100);
            
        }
        setTimeout(() => {
            if(y > 0){
                salto = 0;
                mononoke.style.marginBottom = 0 + "px";
            }
        }, 180);
        
        

    }

    console.log('Posición mononoke: '+ x)
    let contador = false;
    while(contador == false){
    if(x > posicion && x <= posicion+20){
        mensajito.classList.replace('hidden','visible')
        return contador = true;
        
    } else {
        mensajito.classList.replace('visible', 'hidden')
        return contador = false;
    }
    
}
})
