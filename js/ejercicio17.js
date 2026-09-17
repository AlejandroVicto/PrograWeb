const appTareas = (() => {
    const get = () => JSON.parse(localStorage.getItem("tareas")) || [];
    const set = (t) => localStorage.setItem("tareas", JSON.stringify(t));
    return {
        get,
        add: (tarea) => { 
            let t = get(); 
            t.push(tarea); 
            set(t); 
        },
        del: (i) => { 
            let t = get(); 
            t.splice(i, 1); 
            set(t); 
        }
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    const inputNuevaTarea = document.getElementById("nuevaTarea");
    const btnAgregar = document.getElementById("btnAgregar");
    const listaTareas = document.getElementById("listaTareas");

    const renderizarTareas = () => {
        listaTareas.innerHTML = appTareas.get().map((t, i) => `
            <div>
                <input type="text" value="${t.tarea}" readonly>
                <button data-index="${i}">X</button>
            </div>
        `).join("");
    };

    btnAgregar.addEventListener('click', () => {
        const input = inputNuevaTarea.value.trim();
        if (!input) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La tarea no puede estar vacía'
            });
            return;
        }
        appTareas.add({ tarea: input, completada: false });
        inputNuevaTarea.value = "";
        renderizarTareas();
    });

    listaTareas.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = e.target.getAttribute('data-index');
            Swal.fire({ 
                title: '¿Borrar la tarea?', 
                icon: 'warning', 
                showCancelButton: true,
                confirmButtonText: 'Sí, borrar',
                cancelButtonText: 'Cancelar'
            }).then(r => {
                if (r.isConfirmed) { 
                    appTareas.del(index); 
                    renderizarTareas(); 
                }
            });
        }
    });

    renderizarTareas();
});
