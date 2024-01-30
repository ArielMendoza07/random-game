let numPC = Math.floor(Math.random() * 10) + 1;
let numUser = 0;
let intentos = 1;

while(numPC != numUser){
    numUser = prompt("Ingresa un num entre 1 y 10: ");
    console.log(numUser);

    if(numUser == numPC){
        alert(`Acertaste en ${intentos} intentos`);
    } 
    else if (numUser < numPC) {
        alert("El número es mayor!");
    } 
    else {
        alert("El número es menor!");      
    }
    intentos++;

    if(intentos > 3){
        alert("Perdiste tus 3 vidas! Intenta de nuevo.");
        break;
    }
}