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

function interfazAgregarTarea() {
    var input = document.getElementById("nuevaTarea").value.trim();
    
    if (!input) {
        return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Tarea vacía'
        });
    }

    appTareas.add({ tarea: input, completada: false });
    document.getElementById("nuevaTarea").value = "";
    renderizarTareas();
}

function interfazEliminarTarea(i) {
    Swal.fire({ 
        title: '¿Borrar?', 
        icon: 'warning', 
        showCancelButton: true 
    }).then(r => {
        if (r.isConfirmed) { 
            appTareas.del(i); 
            renderizarTareas(); 
        }
    });
}

function renderizarTareas() {
    document.getElementById("listaTareas").innerHTML = appTareas.get().map((t, i) => `
        <div>
            <input type="text" value="${t.tarea}" readonly>
            <button onclick="interfazEliminarTarea(${i})">X</button>
        </div>
    `).join("");
}

window.onload = renderizarTareas;
