function calculate() {
    let base = document.getElementById('baset');
    let altura = document.getElementById('altura');
    let base1 = Number.parseFloat(base.value);
    let altura1 = Number.parseFloat(altura.value);
    let area = base1 * altura1;
    area.toFixed(2);

    result.innerHTML = `Área do terreno corresponde a ${area}m².`

}