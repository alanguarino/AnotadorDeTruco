const jugadorUnoDisplay = document.querySelector('#jugadorUnoDisplay');
const jugadorDosDisplay = document.querySelector('#jugadorDosDisplay');
const botonJugadorUno = document.querySelector('#botonJugadorUno');
const botonJugadorDos = document.querySelector('#botonJugadorDos');
const botonReset = document.querySelector('#botonReset');
const jugarA = document.querySelector('#jugarA');


let jugadorUnoPuntos = 0;
let jugadorDosPuntos = 0;

let isGameOver = false;
let puntosParaGanar = parseInt(jugarA.value);


botonJugadorUno.addEventListener('click', function () {
    if (jugadorUnoPuntos < puntosParaGanar) {
        console.log("CLICKED1")
        jugadorUnoPuntos += 1;
        jugadorUnoDisplay.textContent = jugadorUnoPuntos;
    }
    if (jugadorUnoPuntos === puntosParaGanar) {
        jugadorUnoDisplay.classList.add('winner')
        jugadorDosDisplay.classList.add('looser')
        botonJugadorUno.disabled = true;
        botonJugadorDos.disabled = true;
    }

})

botonJugadorDos.addEventListener('click', function () {
    if (jugadorDosPuntos < puntosParaGanar) {
        console.log("CLICKED2")
        jugadorDosPuntos += 1;
        jugadorDosDisplay.textContent = parseInt(jugadorDosPuntos);
    }
    if (jugadorDosPuntos === puntosParaGanar) {
        jugadorDosDisplay.classList.add('winner')
        jugadorUnoDisplay.classList.add('looser')
        botonJugadorUno.disabled = true;
        botonJugadorDos.disabled = true;
    }
})

jugarA.addEventListener('change', function () {
    puntosParaGanar = parseInt(this.value);

})

botonReset.addEventListener('click', function () {
    jugadorUnoPuntos = 0;
    jugadorDosPuntos = 0;
    jugadorUnoDisplay.textContent = 0;
    jugadorDosDisplay.textContent = 0;
    jugadorUnoDisplay.classList.remove('winner', 'looser')
    jugadorDosDisplay.classList.remove('winner', 'looser')
    botonJugadorUno.disabled = false;
    botonJugadorDos.disabled = false;


})