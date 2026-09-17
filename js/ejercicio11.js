document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btnConvertir');
    const inputKilometros = document.getElementById('kilometros');
    const inputMillas = document.getElementById('millas');

    btnConvertir.addEventListener('click', () => {
        const kmValue = inputKilometros.value.trim();

        if (kmValue === '') {
            alert('Por favor, ingresa una distancia en kilómetros.');
            inputKilometros.focus();
            return;
        }

        const kilometros = parseFloat(kmValue);

        if (isNaN(kilometros)) {
            alert('El valor ingresado no es numérico.');
            inputKilometros.focus();
            return;
        }

        const millas = kilometros * 0.621371;

        inputMillas.value = `${millas} millas`;
    });
});
