document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btnConvertir');
    const inputPesos = document.getElementById('pesos');
    const inputResultado = document.getElementById('resultado');

    btnConvertir.addEventListener('click', () => {
        const pesosValue = inputPesos.value.trim();
        
        if (pesosValue === '') {
            alert('Por favor, ingresa una cantidad en pesos.');
            inputPesos.focus();
            return;
        }

        const pesos = parseFloat(pesosValue);
        
        if (isNaN(pesos) || pesos < 0) {
            alert('Por favor, ingresa un valor numérico positivo.');
            inputPesos.focus();
            return;
        }

        const usd = pesos * 0.055;

        inputResultado.value = `${usd.toFixed(2)} USD`;
    });
});
