document.addEventListener('DOMContentLoaded', () => {
    const btnVerificar = document.getElementById('btnVerificar');
    const inputEdad = document.getElementById('edad');
    const inputResultado = document.getElementById('resultado');

    btnVerificar.addEventListener('click', () => {
        const edadValue = inputEdad.value.trim();
        
        if (edadValue === '') {
            alert('Por favor, ingresa tu edad.');
            inputEdad.focus();
            return;
        }

        const edad = parseInt(edadValue, 10);
        
        if (isNaN(edad) || edad < 0) {
            alert('Por favor, ingresa una edad válida.');
            inputEdad.focus();
            return;
        }

        if (edad >= 18) {
            inputResultado.value = "Puedes votar";
        } else {
            inputResultado.value = "No puedes votar";
        }
    });
});
