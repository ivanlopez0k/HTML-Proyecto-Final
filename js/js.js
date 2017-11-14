function Resultado() {
    var numero1 =0;
    var numero2 = 0;
    var resultado=0;

    numero1 = parseFloat(this.document.calculadora.numero1.value);
    numero2 = parseFloat(this.document.calculadora.numero2.value);

    case 1: resultado=numero1+numero2;break;
    case 2: resultado=numero1-numero2;break;
    case 3: resultado=numero1*numero2;break;
    case 4: resultado=numero1/numero2;break;

}

