const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const a = parseFloat(document.getElementById('numero1').value);
    const b = parseFloat(document.getElementById('numero2').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('resultado').value = '';
        Swal.fire({
            icon: 'error',
            title: 'Error de entrada',
            text: 'Ingresa números válidos en ambos campos.'
        });
        return;
    }

    let res;

    if (operacion === 'suma') {
        res = sumar(a, b);
    } else if (operacion === 'resta') {
        res = restar(a, b);
    } else if (operacion === 'multiplicacion') {
        res = multiplicar(a, b);
    } else if (operacion === 'division') {
        res = dividir(a, b);
    }

    if (typeof res === 'string') {
        document.getElementById('resultado').value = '';
        Swal.fire({
            icon: 'error',
            title: 'Error matemático',
            text: res
        });
    } else {
        document.getElementById('resultado').value = res;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnSumar').addEventListener('click', () => calcularOperacion('suma'));
    document.getElementById('btnRestar').addEventListener('click', () => calcularOperacion('resta'));
    document.getElementById('btnMultiplicar').addEventListener('click', () => calcularOperacion('multiplicacion'));
    document.getElementById('btnDividir').addEventListener('click', () => calcularOperacion('division'));
});
