document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btnCalcular');
    const inputNumeros = document.getElementById('numeros');
    const inputMayor = document.getElementById('mayor');
    const inputMenor = document.getElementById('menor');
    const inputPromedio = document.getElementById('promedio');

    btnCalcular.addEventListener('click', () => {
        const value = inputNumeros.value.trim();

        if (value === '') {
            alert('Por favor, ingresa una serie de números separados por comas.');
            inputNumeros.focus();
            return;
        }

        const stringArr = value.split(',');
        const numeros = stringArr.map(item => parseFloat(item.trim()));

        if (numeros.some(isNaN)) {
            alert('Ingresa solo números válidos separados por comas.');
            inputNumeros.focus();
            return;
        }

        const mayor = Math.max(...numeros);
        const menor = Math.min(...numeros);
        const suma = numeros.reduce((a, b) => a + b, 0);
        const promedio = suma / numeros.length;

        inputMayor.value = mayor;
        inputMenor.value = menor;
        inputPromedio.value = promedio;
    });
});
