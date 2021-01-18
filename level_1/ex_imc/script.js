const calcular = document.getElementById('botao');
 

function imc() {
    let nome = document.getElementById('txtnome').value;
    let altura = document.getElementById('txtaltura').value;
    let peso = document.querySelector('#txtpeso').value;
    let resultado = document.getElementById('result');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificação = '';

        if (valorIMC < 18.5) {
            classificação = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificação = 'com o peso ideal. tá em forma.';
        }else if (valorIMC < 30) {
            classificação = 'levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificação = 'obesidade grau I.';
        }else if (valorIMC < 40) {
            classificação = 'obesidade grau II.';
        }else {
            classificação = 'obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `Olá, ${nome}! Seu IMC é: ${valorIMC} e você está ${classificação}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
    
}

calcular.addEventListener('click', imc);