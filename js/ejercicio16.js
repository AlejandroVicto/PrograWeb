const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (op) => {
    const inputNum1 = document.getElementById('numero1');
    const inputNum2 = document.getElementById('numero2');
    const inputResultado = document.getElementById('resultado');

    const num1Value = inputNum1.value.trim();
    const num2Value = inputNum2.value.trim();

    if (num1Value === '' || num2Value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor completa ambos campos numéricos.'
        });
        inputResultado.value = '';
        return;
    }

    const a = parseFloat(num1Value);
    const b = parseFloat(num2Value);

    if (isNaN(a) || isNaN(b)) {
        Swal.fire({
            icon: 'error',
            title: 'Error de entrada',
            text: 'Ingresa únicamente números válidos.'
        });
        inputResultado.value = '';
        return;
    }

    let res;
    switch (op) {
        case 'suma': res = sumar(a, b); break;
        case 'resta': res = restar(a, b); break;
        case 'multiplicacion': res = multiplicar(a, b); break;
        case 'division': res = dividir(a, b); break;
    }

    if (typeof res === 'string') {
        Swal.fire({
            icon: 'error',
            title: 'Error matemático',
            text: res
        });
        inputResultado.value = '';
    } else {
        inputResultado.value = res;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnSumar').addEventListener('click', () => calcularOperacion('suma'));
    document.getElementById('btnRestar').addEventListener('click', () => calcularOperacion('resta'));
    document.getElementById('btnMultiplicar').addEventListener('click', () => calcularOperacion('multiplicacion'));
    document.getElementById('btnDividir').addEventListener('click', () => calcularOperacion('division'));
});
