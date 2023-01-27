var proxPasso = 1;
var ultimaRodada = 0;
var dividoDois = 0;
var esperarApostar = 0;
var inicio = ["10s"];
var vinteUm = 'field-icon d-block link mb-1 svg-inline--fa fa-square-full fa-w-16 field-icon-20 t-wheel-history-enter t-wheel-history-enter-active';
var vinteDois = 'field-icon d-block link mb-1 svg-inline--fa fa-square-full fa-w-16 field-icon-20';

function apostarVinte() {
    document.getElementsByClassName('pa-1 scrap-ctn')[4].click();
}

function apertarVezes() {
    document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[0].click();
}

function resultadoAtualizado() {
    if (document.getElementsByClassName('round-history-inner flex-grow-0')[0].children[2].className.animVal === vinteDois || document.getElementsByClassName('round-history-inner flex-grow-0')[0].children[2].className.animVal === vinteUm) {
        if (esperarApostar > 60) {
            console.log("Você ganhou a última aposta!");
            apertarDividido();
            ultimaRodada = 0;
            esperarApostar = 0;
        } else {
            esperarApostar = 0;
            console.log("O contador de espera foi resetado!");
        }
    } else {
        if (esperarApostar >= 60) {
            ultimaRodada = ultimaRodada + 1;
            console.log("Você perdeu "+ultimaRodada+" vezes!");
            esperarApostar = esperarApostar + 1;
        } else {
            esperarApostar = esperarApostar + 1;
            console.log("O contador de espera está em "+esperarApostar);
        }    
    }

    if (ultimaRodada === 18) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if(ultimaRodada === 28) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if(ultimaRodada === 38) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if(ultimaRodada === 48) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if(ultimaRodada === 58) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if(ultimaRodada === 68) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if(ultimaRodada === 78) {
        apertarVezes();
        dividoDois = dividoDois+1;
    } else if(ultimaRodada === 88) {
        apertarVezes();
        dividoDois = dividoDois+1;
    }else if(ultimaRodada === 98) {
        apertarVezes();
        dividoDois = dividoDois+1;
    }else if(ultimaRodada === 108) {
        apertarVezes();
        dividoDois = dividoDois+1;
    }else if(ultimaRodada === 118) {
        apertarVezes();
        dividoDois = dividoDois+1;
    }  
}

function apertarDividido() {
    if (dividoDois === 1) {
        document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click();
    } else if (dividoDois === 2) {
        for (var i = 1; i < 3; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 3) {
        for (var i = 1; i < 4; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 4) {
        for (var i = 1; i < 5; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 5) {
        for (var i = 1; i < 6; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 6) {
        for (var i = 1; i < 7; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 7) {
        for (var i = 1; i < 8; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 8) {
        for (var i = 1; i < 9; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 9) {
        for (var i = 1; i < 10; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 10) {
        for (var i = 1; i < 11; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    } else if (dividoDois === 11) {
        for (var i = 1; i < 12; i++) {
            document.getElementsByClassName('font-weight-semibold text-body-2 blue200--text rounded-0 v-btn v-btn--has-bg theme--dark v-size--default blue700')[1].click(i);
        }
    }
}

setInterval(function () {
    if (proxPasso === 1) {
        if (document.getElementsByClassName('font-weight-bold text-h3 lh-1 mb-n2')[0].innerText === inicio[0]) {
            resultadoAtualizado();
            proxPasso = 2
        }
    }
    
    if (esperarApostar >= 60) {
        if (proxPasso === 2) {
            apostarVinte();
            proxPasso = 1;
        }
    } else {
        proxPasso = 1;
    }
}, 1000)