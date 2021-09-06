let contenedor2 = document.getElementById('contenedor');
let nube1 = document.getElementById('nube1');
let nube2 = document.getElementById('nube2');
let nube3 = document.getElementById('nube3');
let nube4 = document.getElementById('nube4');
let nube5 = document.getElementById('nube5');
let nube6 = document.getElementById('nube6');


function moverNube(nube) {
    //TAMAÑO VENTANA
    let coords = nube.getBoundingClientRect();
    let coordsBody = contenedor2.getBoundingClientRect();
    let bodyWidth = coordsBody.width;
    let xLeft = coords.left;
    let bloqueoNubeL = bodyWidth - xLeft;
    let xRight = coords.right;
    let inicio = -xRight+100;
    //Nube
    let velocidadNube = 2;
    let xNube = 0;
    setInterval(() => {
        if (xNube <= bloqueoNubeL) {
            xNube += velocidadNube;
            nube.style.marginLeft = xNube + "px";
        }
        else {
            xNube = inicio - 120;
            xNube += velocidadNube;
            nube.style.marginLeft = xNube + "px";
        }
    }, 100);
}

function activar() {
    window.onload = () => {
        moverNube(nube1)
        moverNube(nube2);
        moverNube(nube3);
        moverNube(nube4);
        moverNube(nube5);
        moverNube(nube6);
    }
}
activar();



