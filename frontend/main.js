const registroTarefas = [];

function salvarTarefa(event) {
    event.preventDefault();
    const dados = {
        titulo: document.getElementById('tituloTarefa').value,
        descricao: document.getElementById('descricaoTarefa').value,
        dataTermino: document.getElementById('dataTerminoTarefa').value,
        categoria: document.getElementById('categoriaTarefa').value,
        status: document.getElementById('statusTarefa').value
    };
    registroTarefas.push(dados);
    console.log(registroTarefas);

    document.getElementById('tituloTarefa').value = '';
    document.getElementById('descricaoTarefa').value = '';
    document.getElementById('dataTerminoTarefa').value = '';
    document.getElementById('categoriaTarefa').value = '';
    document.getElementById('statusTarefa').value = '';
}

function listarTarefas() {
    for( tarefa in registroTarefas ) {
        console.log(tarefa)
    }
}