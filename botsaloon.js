var proxPasso = 1;
var ultimaRodada = 0;
var dividoDois = 0;
var esperarApostar = 0;
var inicio = 'Rolling in 10.0 seconds';
var verde = 'roll-circle roll-circle--green';

function apostarVerde() {
    document.getElementsByClassName('projected-win projected-win--green')[0].click();
}

function apertarVezes() {
    document.getElementsByClassName('button betting-bar__betting-button')[6].click();
}

function resultadoAtualizado() {
    if (document.getElementsByTagName('div')[1].children[15].children[0].children[1].children[1].children[1].children[0].className === verde) {
        if (esperarApostar > 50) {
            console.log("Você ganhou a última aposta!");
            apertarDividido();
            ultimaRodada = 0;
            esperarApostar = 0;
        } else {
            esperarApostar = 0;
            console.log("O contador de espera foi resetado!");
        }
    } else {
        if (esperarApostar >= 50) {
            ultimaRodada = ultimaRodada + 1;
            console.log("Você perdeu "+ultimaRodada+" vezes!");
            esperarApostar = esperarApostar + 1;
        } else {
            esperarApostar = esperarApostar + 1;
            console.log("O contador de espera está em "+esperarApostar);
        }
    }

    if (ultimaRodada === 13) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 20) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 27) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 34) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 41) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 48) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 55) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 62) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 69) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 76) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if (ultimaRodada === 83) {
        apertarVezes();
        dividoDois = dividoDois+1;
    }  
}

function apertarDividido() {
    if (dividoDois === 1) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click();
    } else if (dividoDois === 2) {
        for (var i = 1; i < 3; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 3) {
        for (var i = 1; i < 4; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 4) {
        for (var i = 1; i < 5; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 5) {
        for (var i = 1; i < 6; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 6) {
        for (var i = 1; i < 7; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 7) {
        for (var i = 1; i < 8; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 8) {
        for (var i = 1; i < 9; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 9) {
        for (var i = 1; i < 10; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 10) {
        for (var i = 1; i < 11; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    } else if (dividoDois === 11) {
        for (var i = 1; i < 12; i++) {
            document.getElementsByClassName('button betting-bar__betting-button')[5].click(i);
        }
    }
}

setInterval(function () {
    //Se uma nova rodada começou, vai para o passo 2.
    if (proxPasso === 1) {
        if (document.getElementsByTagName('h1')[0] === inicio) {
            resultadoAtualizado();
            proxPasso = 2
        }
    }
    //colocar a aposta
    if (esperarApostar >= 50) {
        if (proxPasso === 2) {
            apostarVerde();
            proxPasso = 1;
        }
    } else {
        proxPasso = 1;
    }
}, 99)