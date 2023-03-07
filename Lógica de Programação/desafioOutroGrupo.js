alert("Calculadora de horas\nVamos começar")

var horaInicial = prompt("Digite a hora inicial");
var minutoInicial = prompt("Digite o minuto inicial");
var horaFinal = prompt("Digite a hora final");
var minutoFinal = prompt("Digite o minuto final");
var resultadoHora;
var resultadoMinuto;

while (horaInicial == "") {
    horaInicial = prompt("Favor preencher os campos\nDigite a hora inicial");
}

while (horaFinal == "") {
    horaFinal = prompt("Favor preencher os campos\nDigite a hora final");
}

while (minutoInicial == "") {
    minutoInicial = prompt("Favor preencher os campos\nDigite o minuto inicial");
}

while (minutoFinal == "") {
    minutoFinal = prompt("Favor preencher os campos\nDigite o minuto final");
}

var opcao = prompt(`As horas digitadas são:\nHora e minutos iniciais: ${horaInicial}:${horaFinal}\nHora e minutos finais: ${horaFinal}:${minutoFinal}\n\nVocê deseja Somar ou Subtrair as horas?`)

while (opcao == "") {
    opcao = prompt(`As horas digitadas são:\nHora e minutos iniciais: ${horaInicial}:${horaFinal}\nHora e minutos finais: ${horaFinal}:${minutoFinal}\n\nVocê deseja Somar ou Subtrair as horas?`)
}

switch (opcao) {
    case "Soma":
    case "soma":
    case "Somar":
    case "somar":
    case "Add":
    case "add":
        somarHoras();
        break;
    case "Subtração":
    case "Subtracao":
    case "Subtrair":
    case "subtrair":
    case "Sub":
    case "sub":
        subtrairHoras();
        break;
    default:
        alert("Favor selecionar uma opção correta");
        opcao = prompt(`As horas digitadas são:\nHora e minutos iniciais: ${horaInicial}:${horaFinal}\nHora e minutos finais: ${horaFinal}:${minutoFinal}\n\nVocê deseja Somar ou Subtrair as horas?`)
}

function somarHoras() {
    resultadoHora = horaFinal + horaInicial;
    resultadoMinuto = minutoFinal + minutoInicial;

    while (resultadoMinuto > 59) {
        resultadoMinuto -= 60;
        resultadoHora++;
    }

    alert(`O resultado da soma de ${horaInicial}:${minutoInicial} mais ${horaFinal}:${minutoFinal} é:\n${resultadoHora}:${resultadoMinuto}`);
}

function subtrairHoras() {
    if (horaInicial >= horaFinal) {
        resultadoHora = horaInicial - horaFinal;
    } else {
        resultadoHora = horaFinal - horaInicial;
    }

    if (minutoInicial >= minutoFinal) {
        resultadoMinuto = minutoInicial - minutoFinal;
    } else {
        resultadoMinuto = minutoFinal - minutoInicial;
    }

    while (resultadoMinuto > 59) {
        resultadoMinuto += 60;
        resultadoHora--;
    }

    alert(`O resultado da subtração de ${horaInicial}:${minutoInicial} menos ${horaFinal}:${minutoFinal} é:\n${resultadoHora}:${resultadoMinuto}`);
}
