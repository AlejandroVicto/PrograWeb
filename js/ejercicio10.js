document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btnConvertir');
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');

    btnConvertir.addEventListener('click', () => {
        const celsiusValue = inputCelsius.value.trim();
        
        // Validar que el campo no esté vacío
        if (celsiusValue === '') {
            alert('Por favor, ingresa un valor en grados Celsius.');
            inputCelsius.focus();
            return;
        }

        const celsius = parseFloat(celsiusValue);
        
        // Validar que el valor ingresado sea numérico
        if (isNaN(celsius)) {
            alert('El valor ingresado no es un número válido.');
            inputCelsius.focus();
            return;
        }

        // Realizar la conversión: F = (C * 9/5) + 32
        const fahrenheit = (celsius * 9 / 5) + 32;

        // Mostrar el resultado en el campo readonly, formateado
        inputFahrenheit.value = `${fahrenheit.toFixed(2).replace(/\.00$/, '')}°F`;
    });
});
