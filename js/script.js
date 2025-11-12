// Contador de visitas persistente utilizando `localStorage`.
// Botón de "Reestablecer Contador" para reiniciar el contador a cero.
const btnReestablecer = document.getElementById('btnReestablecer');
const contadorVisitas = document.getElementById('contadorVisitas');

document.addEventListener('DOMContentLoaded', () => { //hay que poner document para que coja al cargar la pagina(NO el contador)
    let suma = parseFloat(localStorage.getItem('contadorVisitas')) || 0;
    // suma sera igual a numero obtenido del localStorage o si no hay sera 0
    suma++;  //sumamos la visita
    localStorage.setItem('contadorVisitas', suma);  //guardamos la visita
    contadorVisitas.textContent = suma;
})

btnReestablecer.addEventListener('click', () => {
    suma = 0;
    localStorage.setItem('contadorVisitas', suma); //guardamos en local storage si no solo se reinicia al apretar pero al sumar otra vez empieza por donde estaba
    contadorVisitas.textContent = suma;
})


