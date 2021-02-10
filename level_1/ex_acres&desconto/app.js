const descontar = () => {
    const produto = document.getElementById('product').value;
    const preço = document.getElementById('price').value;
    const porcentagem = document.getElementById('perc').value;
    const preço_novo = preço - (porcentagem / 100 * preço);
    const texto = document.getElementById('total');

    texto.innerHTML = `Produto: ${produto} <br>
                         Preço: R$ ${preço} <br>
                         Percentual de desconto: ${porcentagem}% <br>
                         Preço com desconto: R$ ${preço_novo.toFixed(2)}`;   

};

const acrescer = () => {
    const produtoj = document.getElementById('product').value;
    const preçoj = document.getElementById('price').value;
    const porcentagemj = document.getElementById('perc').value;
    const preço_novoj = Number(preçoj) + (porcentagemj / 100 * preçoj); 
    const textoj = document.getElementById('total');


    textoj.innerHTML = `Produto: ${produtoj} <br>
                         Preço: R$ ${preçoj} <br>
                         Percentual de juros: ${porcentagemj}% <br>
                         Preço com juros: R$ ${preço_novoj.toFixed(2)}`;

};


