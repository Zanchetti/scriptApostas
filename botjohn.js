var proxPasso = 1;
var ultimaRodada = 0;
var dividoDois = 0;
var esperarApostar = 0;
var verde = '$';
var inicio = ["APOSTAS ABERTAS\n10 SEGUNDOS RESTANTES"];

function apostarVerde() {
    document.getElementById("sverde").click();
}

function apertarVezes() {
    document.getElementsByClassName('btn-aposta')[7].click();
}

function apertarDividido() {
    if (dividoDois === 1) {
        document.getElementsByClassName('btn-aposta')[6].click();
    } else if (dividoDois === 2) {
        for (var i = 1; i < 3; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 3) {
        for (var i = 1; i < 4; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 4) {
        for (var i = 1; i < 5; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 5) {
        for (var i = 1; i < 6; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 6) {
        for (var i = 1; i < 7; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 7) {
        for (var i = 1; i < 8; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 8) {
        for (var i = 1; i < 9; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 9) {
        for (var i = 1; i < 10; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 10) {
        for (var i = 1; i < 11; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } else if (dividoDois === 11) {
        for (var i = 1; i < 12; i++) {
            document.getElementsByClassName('btn-aposta')[6].click(i);
        }
    } 
    }

function resultadoAtualizado() {
    if (document.getElementsByClassName('carousel-cells')[0].children[0].innerText === verde) {
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

setInterval(function () {
    if (proxPasso === 1) {
        if (document.getElementsByClassName('opened')[0].innerText === inicio[0]) {
            resultadoAtualizado();
            proxPasso = 2
        }
    }
    
    if (esperarApostar >= 50) {
        if (proxPasso === 2) {
            apostarVerde();
            proxPasso = 1;
        }
    } else {
        proxPasso = 1;
    }
}, 1000)