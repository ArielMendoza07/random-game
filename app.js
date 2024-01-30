/* let titleChange = document.querySelector('h1');
titleChange.innerHTML = 'JSS';

let parChange = document.querySelector('p');
parChange.innerHTML = 'Ingresa un número del 1 al 10 en la cajita siguiente: ';

function greetingFunction(){
    console.log("Hello World");
} */
let contadorIntentos = 1;

let numeroSecreto = secretNum();

function changedElement(html, text){
    let elemento = document.querySelector(html);
    elemento.innerHTML = text;
    return;
}

function secretNum(){
    return Math.floor(Math.random()*10)+1;
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto == numeroUsuario){
        changedElement('p', `Correcto! Acertaste en ${contadorIntentos} ${(contadorIntentos === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto < numeroUsuario){
            changedElement('p', 'El número secreto es menor!');
        } else if(numeroSecreto > numeroUsuario){
            changedElement('p', 'El número secreto es mayor!');
        } else {
            changedElement('p', 'La suposición es incorrecta...');
        }

        contadorIntentos++;
    }

    console.log(numeroSecreto);
    limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function mensajesIniciales(){
    changedElement('h1', 'Guess the secret number!');
    changedElement('p', 'To play, enter a number from 1 to 10 in the following box:');
    changedElement('button', 'Try');
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //mostrar mensajes nuevamente
    mensajesIniciales();

    //Generar de nuevo el numero random
    numeroSecreto = secretNum();

    //dar de nuevo el valor a 'intentos'
    contadorIntentos = 1;

    document.querySelector('#reiniciar').setAttribute('disabled', true);

    return;
}

// document.querySelector("html").onclick = function () {
//     alert("¡Ouch! ¡Deja de pincharme!");
//   };
  
mensajesIniciales();


