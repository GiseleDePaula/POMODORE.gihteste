const segundosPomodoro = 4000 // Estamos usando 4 segundos para testes. 0 tempo oficial do pomodoro 25*60*1000
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.")

    // Criando o cronometro
    setTimeout(() => {
        console.log("Finalizou o Pomodoro!");
        alert("Hora de descansar!")

        clearInterval(contador)
    }, segundosPomodoro)

    let contador = setInterval('contadorDeSegundos()',1000);
})

function contadorDeSegundos() {
     console.log('tick')
}
