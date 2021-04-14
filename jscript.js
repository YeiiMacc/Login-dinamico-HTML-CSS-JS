const monster = document.getElementById('monster');
const inputUsuario = document.getElementById('input-usuario');
const inputClave = document.getElementById('input-clave');
const body = document.querySelector('body');
const anchoMitad = window.innerWidth / 2;
const altoMitad = window.innerHeight / 2;
let seguirPunteroMouse = true;

// Movimiento ojo pantalla dividido  en 4 -|-
body.addEventListener('mousemove', (m)=> {
    if (seguirPunteroMouse) {
        if (m.clientX < anchoMitad && m.clientY < altoMitad) {
            monster.src = "img/idle/2.png";
        } else if (m.clientX < anchoMitad && m.clientY > altoMitad) {
            monster.src = "img/idle/3.png";
        } else if (m.clientX > anchoMitad && m.clientY < altoMitad) {
            monster.src = "img/idle/5.png";
        } else {
            monster.src = "img/idle/4.png";
        }
    }
})

// Movimiento ojo pantalla formulario
    // Desactivar seguirPunteroMouse
inputUsuario.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
})

    // Activar seguirPunteroMouse
inputUsuario.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
})

// Ver los campos de texto al escribir
inputUsuario.addEventListener('keyup',()=>{
    let usuario = inputUsuario.value.length;
    if (usuario >= 0 && usuario <= 5) {
        monster.src = 'img/read/1.png';
    } else if (usuario >= 6 && usuario <= 14) {
        monster.src = 'img/read/2.png';
    } else if (usuario >= 15 && usuario <= 20) {
        monster.src = 'img/read/3.png';
    } else {
        monster.src = 'img/read/4.png';
    }
})

// Cubrir ojos al escribir clave
inputClave.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
    let cont = 1;
    const cubrirOjo = setInterval(()=>{
        monster.src = 'img/cover/'+cont+'.png';
        if (cont < 8) {
            cont++;
        } else {
            clearInterval(cubrirOjo);
        }
    }, 50);
})

 // Descubrir ojos al salir de clave
inputClave.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
    let cont = 7;
    const descubrirOjo = setInterval(() => {
        monster.src = 'img/cover/'+cont+'.png';
        if (cont > 1) {
            cont--;
        } else {
            clearInterval(descubrirOjo);
        }
    }, 50);
})