function calculaImc() {
    // Pega peso e altura
    let altura         = parseFloat(document.getElementById('altura').value);
    let peso           = parseFloat(document.getElementById('peso').value);
    if (Number.isInteger(altura)) {
        altura /= 100;
    }
    let imc            = 0;
    let getOldClassi   = document.querySelector('span#classificacao').className;
    let eClassificacao = document.querySelector('span#classificacao');
    let classiName     = '';
    let classificacao;

    // Valida se realmente são valores numéricos
    if (isNaN(altura)) {
        return alert('Digite uma altura válida.');
    }
    if (isNaN(peso)) {
        return alert('Digite um peso válido.');
    }

    // Calcula o IMC
    if ((altura === 0) || (peso === 0)) {
        return alert('Altura ou peso não podem ser igual a zero (0).');
    }

    imc = peso/(altura * altura);
    // Classificação
    if (imc < 16) {
        if (getOldClassi != '') {
            eClassificacao.classList.remove(getOldClassi);
        }
        classificacao = 'magreza-grave';
        classiName = 'Magreza Grave';
        eClassificacao.classList.add(classificacao);
    } else if (imc >= 16 && imc < 17) {
        if (getOldClassi != '') {
            eClassificacao.classList.remove(getOldClassi);
        }
        classificacao = 'magreza-moderada';
        classiName = 'Magreza Moderada';
        eClassificacao.classList.add(classificacao);
    } else if (imc >= 17 && imc < 18.5) {
        if (getOldClassi != '') {
            eClassificacao.classList.remove(getOldClassi);
        }
        classificacao = 'magreza-leve';
        classiName = 'Magreza Leve';
        eClassificacao.classList.add(classificacao);
    } else if (imc >= 18.5 && imc < 25) {
        if (getOldClassi != '') {
            eClassificacao.classList.remove(getOldClassi);
        }
        classificacao = 'saudavel';
        classiName = 'Saudável';
        eClassificacao.classList.add(classificacao);
    } else if (imc >= 25 && imc < 30) {
        if (getOldClassi != '') {
            eClassificacao.classList.remove(getOldClassi);
        }
        classificacao = 'sobrepeso';
        classiName = 'Sobrepeso';
        eClassificacao.classList.add(classificacao);
    } else if (imc >= 30 && imc < 35) {
        if (getOldClassi != '') {
            eClassificacao.classList.remove(getOldClassi);
        }
        classificacao = 'obesidade-grau-1';
        classiName = 'Obesidade Grau I';
        eClassificacao.classList.add(classificacao);
    } else if (imc >= 35 && imc < 40) {
        if (getOldClassi != '') {
            eClassificacao.classList.remove(getOldClassi);
        }
        classificacao = 'obesidade-grau-2';
        classiName = 'Obesidade Grau II (severa)';
        eClassificacao.classList.add(classificacao);
    } else if (imc >= 40) {
        if (getOldClassi != '') {
            eClassificacao.classList.remove(getOldClassi);
        }
        classificacao = 'obesidade-grau-3';
        classiName = 'Obesidade Grau III (mórbida)';
        eClassificacao.classList.add(classificacao);
    }

    // Add a informação nos campos
    document.getElementById('imc-value').innerHTML = imc.toFixed(2);
    document.querySelector('#classificacao').innerHTML = classiName;
}


function limpar() {
    let altura = document.getElementById('altura').value = '';
    let peso = document.getElementById('peso').value = '';
    document.getElementById('imc-value').innerHTML = '0.00'
    document.getElementById('classificacao').innerHTML = ''
}