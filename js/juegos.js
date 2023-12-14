let cronometro;
let segundos = 0;
let minutos = 0;
let horas = 0;

function iniciarCronometro() {
    detenerCronometro(); // Detener el cronómetro si ya está en marcha
    cronometro = setInterval(actualizarCronometro, 1000);
}

function detenerCronometro() {
    clearInterval(cronometro);
}

function reiniciarCronometro() {
    detenerCronometro();
    segundos = 0;
    minutos = 0;
    horas = 0;
    actualizarCronometro();
}

function actualizarCronometro() {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        if (minutos == 60) {
            minutos = 0;
            horas++;
        }
    }

    const tiempoString = 
        (horas < 10 ? "0" : "") + horas + ":" +
        (minutos < 10 ? "0" : "") + minutos + ":" +
        (segundos < 10 ? "0" : "") + segundos;

    document.getElementById("tiempo").innerText = tiempoString;
}
