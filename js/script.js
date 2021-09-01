function calculaImc() {
    // Pega peso e altura
    let altura         = parseFloat(document.getElementById('altura').value);
    let peso           = parseFloat(document.getElementById('peso').value);
    let imc            = 0;
    let eClassificacao = document.querySelector('#classificacao');
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
    switch (parseFloat(imc)) {
        case (imc < 16):
            eclassificacao.classList.toggle('');
            classificacao = 'magreza-grave';
            classiName = 'Magreza Grave';
            eclassificacao.classList.toggle(classificacao);
            break;
        case ((imc >= 16) && (imc < 17)):
            eclassificacao.classList.toggle('');
            classificacao = 'magreza-moderada';
            classiName = 'Magreza Moderada';
            eclassificacao.classList.toggle(classificacao);
            break;
        case ((imc >= 17) && (imc < 18.5)):
            eclassificacao.classList.toggle('');
            classificacao = 'magreza-leve';
            classiName = 'Magreza Leve';
            eclassificacao.classList.toggle(classificacao);
            break;
        case ((imc >= 18.5) && (imc < 25)):
            eclassificacao.classList.toggle('');
            classificacao = 'saudavel';
            classiName = 'Saudável';
            eclassificacao.classList.toggle(classificacao);
            break;
        case ((imc >= 25) && (imc < 30)):
            eclassificacao.classList.toggle('');
            classificacao = 'sobrepeso';
            classiName = 'Sobrepeso';
            eclassificacao.classList.toggle(classificacao);
            break;
        case ((imc >= 30) && (imc < 35)):
            eclassificacao.classList.toggle('');
            classificacao = 'obesidade-grau-1';
            classiName = 'Obesidade Grau I';
            eclassificacao.classList.toggle(classificacao);
            break;
        case ((imc >= 35) && (imc < 40)):
            eclassificacao.classList.toggle('');
            classificacao = 'obesidade-grau-2';
            classiName = 'Obesidade Grau II';
            eclassificacao.classList.toggle(classificacao);
            break;
        case (imc >= 40):
            eclassificacao.classList.toggle('');
            classificacao = 'obesidade-grau-3';
            classiName = 'Obesidade Grau III';
            eclassificacao.classList.toggle(classificacao);
            break;
    }

    console.log(classiName);

    // Add a informação nos campos
    document.getElementById('imc-value').innerHTML = imc.toFixed(2);
    document.getElementById('classificacao').innerHTML = '' + classiName;
}


function limpar() {
    let altura = document.getElementById('altura').value = '';
    let peso = document.getElementById('peso').value = '';
    document.getElementById('imc-value').innerHTML = '0.00'
    document.getElementById('classificacao').innerHTML = 'Teste'
}