'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2); //slice é cortar da direita pra esquerda

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qntSegundos = tempo % 60;
    const qntMinutos = Math.floor((tempo % (60 * 60)) / 60); //não posso achar o resto dos minutos pq os minutos são mais tempo(tenho que tirar a hora)
    const qntHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qntDias = Math.floor(tempo  / (60 * 60 * 24));


    segundos.textContent = formatarDigito(qntSegundos);
    minutos.textContent = formatarDigito(qntMinutos);
    horas.textContent = formatarDigito(qntHoras);
    dias.textContent = formatarDigito(qntDias);



}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id)

    const contar = () => {
        if (tempo == 0) {
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
    // const dataEvento = document.getElementById('date').value;
    const dataEvento = new Date ('2023-12-27 22:50:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());