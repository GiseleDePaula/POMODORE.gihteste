const milissegundosPomodoro = 70000 // Estamos usando 4 segundos para testes. 0 tempo oficial de 25 minutos 25*60*1000
const disparador = document.querySelector('#disparador')
const cronometro = document.querySelector('#cronometro')
let milissegundosRestantes = milissegundosPomodoro - 1000
let contador

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.")

    console.log('faltam', (milissegundosPomodoro/1000))

    contador = setInterval('contadorDeSegundos()',1000);
})

function contadorDeSegundos() {
    
    if (milissegundosRestantes == 0) {
        cronometro.textContent = "00:00"
        console.log("Hora de descansar!") 

        clearInterval(contador)
    } else {
        cronometro.textContent = formatadorDoTempo(milissegundosRestantes/1000)
    }

    milissegundosRestantes -= 1000;
}  

function formatadorDoTempo (tempo) {
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60;
    return (minutos.toString().padStart(2, '0')+":"+segundos.toString().padStart(2, '0'))
}