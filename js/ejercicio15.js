document.addEventListener('DOMContentLoaded', () => {
    let estudiantes = [];

    const btnAgregar = document.getElementById('btnAgregar');
    const btnCalcular = document.getElementById('btnCalcular');
    
    const inputNombre = document.getElementById('nombre');
    const inputCalificacion = document.getElementById('calificacion');
    
    const inputPromedio = document.getElementById('promedio');
    const inputMasAlta = document.getElementById('masAlta');
    const inputMasBaja = document.getElementById('masBaja');

    btnAgregar.addEventListener('click', () => {
        const nombre = inputNombre.value.trim();
        const calificacionValue = inputCalificacion.value.trim();

        if (!nombre) {
            alert('Por favor, ingresa el nombre del estudiante.');
            inputNombre.focus();
            return;
        }

        if (calificacionValue === '') {
            alert('Por favor, ingresa la calificación del estudiante.');
            inputCalificacion.focus();
            return;
        }

        const calificacion = parseFloat(calificacionValue);

        if (isNaN(calificacion) || calificacion < 0) {
            alert('Por favor, ingresa una calificación numérica válida.');
            inputCalificacion.focus();
            return;
        }

        estudiantes.push({ nombre, calificacion });
        
        inputNombre.value = '';
        inputCalificacion.value = '';
        inputNombre.focus();
    });

    btnCalcular.addEventListener('click', () => {
        if (estudiantes.length === 0) {
            alert('Agrega al menos un estudiante primero.');
            return;
        }

        const cals = estudiantes.map(e => e.calificacion);
        const suma = cals.reduce((a, b) => a + b, 0);
        const promedio = suma / cals.length;

        const maxCal = Math.max(...cals);
        const minCal = Math.min(...cals);

        const estMax = estudiantes.find(e => e.calificacion === maxCal);
        const estMin = estudiantes.find(e => e.calificacion === minCal);

        inputPromedio.value = promedio.toFixed(2);
        inputMasAlta.value = estMax.nombre;
        inputMasBaja.value = estMin.nombre;
    });
});
