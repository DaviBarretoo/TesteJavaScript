const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();



function getDiaDaSemana(diaSemana) {
    let diaDaSemana;

    switch (diaSemana) {
        case 0:
            diaDaSemana = 'domingo'
            return diaDaSemana;
        case 1:
            diaDaSemana = 'segunda'
            return diaDaSemana;

        case 2:
            diaDaSemana = 'terça'
            return diaDaSemana;

        case 3:
            diaDaSemana = 'quarta'
            return diaDaSemana;

        case 4:
            diaDaSemana = 'quinta'
            return diaDaSemana;

        case 5:
            diaDaSemana = 'sexta'
            return diaDaSemana;

        case 6:
            diaDaSemana = 'sabado'
            return diaDaSemana;
    }
}


function getDiaMes(numeroMes) {
    let numeroDoMes;

    switch (numeroMes) {
        case 0:
            numeroDoMes = 'janeiro'
            return numeroDoMes;
        case 1:
            numeroDoMes = 'fevereiro'
            return numeroDoMes;
        case 2:
            numeroDoMes = 'março'
            return numeroDoMes;
        case 3:
            numeroDoMes = 'abril'
            return numeroDoMes;
        case 4:
            numeroDoMes = 'maio'
            return numeroDoMes;
        case 5:
            numeroDoMes = 'junho'
            return numeroDoMes;
        case 6:
            numeroDoMes = 'julho'
            return numeroDoMes;
        case 7:
            numeroDoMes = 'agosto'
            return numeroDoMes;
        case 8:
            numeroDoMes = 'setembro'
            return numeroDoMes;
        case 9:
            numeroDoMes = 'outubro'
            return numeroDoMes;
        case 10:
            numeroDoMes = 'novembro'
            return numeroDoMes;
        case 11:
            numeroDoMes = 'Dezembro'
            return numeroDoMes;

    }
}


function criarData (data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const diaDaSemana = getDiaDaSemana(diaSemana)
    const numeroDoMes = getDiaMes(numeroMes)
    return (
        `${diaDaSemana}, ${data.getDate()} de ${numeroDoMes}` +
        ` de ${data.getFullYear()} ${data.getHours()} : ${data.getMinutes()}`
         );
}

h1.innerHTML = criarData(data);