const milissegundosPomodoro = 4000 // Estamos usando 4 segundos para testes. 0 tempo oficial de 25 minutos 25*60*1000
const disparador = document.querySelector('#disparador')
let milissegundosRestantes = milissegundosPomodoro - 1000
let contador

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.")

    console.log('faltam', (milissegundosPomodoro/1000))

    contador = setInterval('contadorDeSegundos()',1000);
})

function contadorDeSegundos() {
    
    if (milissegundosRestantes == 0) {
        console.log("Finalizou o Pomodoro!");
        alert("Hora de descansar!") 

        clearInterval(contador)
    } else {
        console.log('faltam', milissegundosRestantes/1000)
    }

    milissegundosRestantes -= 1000;
}  