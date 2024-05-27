document.getElementById('alumnoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var materias = [
        { materia: document.getElementById('materia1').value, nota: parseFloat(document.getElementById('nota1').value) },
        { materia: document.getElementById('materia2').value, nota: parseFloat(document.getElementById('nota2').value) },
        { materia: document.getElementById('materia3').value, nota: parseFloat(document.getElementById('nota3').value) },
        { materia: document.getElementById('materia4').value, nota: parseFloat(document.getElementById('nota4').value) },
        { materia: document.getElementById('materia5').value, nota: parseFloat(document.getElementById('nota5').value) }
    ];

    var promedio = materias.reduce((acc, curr) => acc + curr.nota, 0) / materias.length;

    document.getElementById('promedio').innerText = promedio;
});