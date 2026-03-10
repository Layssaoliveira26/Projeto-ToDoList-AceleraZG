let registroTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let listagemTarefas = document.getElementsByClassName('listaTarefas');

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
    localStorage.setItem('tarefas', JSON.stringify(registroTarefas));
    console.log(registroTarefas);

    limparFormulario();
}

function listarTarefas() {
    listagemTarefas[0].innerHTML = '';
    for(let i = 0; i < registroTarefas.length; i++) {
        let tarefa = registroTarefas[i];
            listagemTarefas[0].innerHTML += `
                <div class="tarefa">
                    <h4>${tarefa.titulo}</h4>
                    <p>Descrição: ${tarefa.descricao}</p>
                    <p>Data: ${tarefa.dataTermino}</p>
                    <p>Categoria: ${tarefa.categoria}</p>
                    <p>Status: ${tarefa.status}</p>
                </div>
            `;
        }
}

function limparFormulario() {
    document.getElementById('tituloTarefa').value = '';
    document.getElementById('descricaoTarefa').value = '';
    document.getElementById('dataTerminoTarefa').value = '';
    document.getElementById('categoriaTarefa').value = '';
    document.getElementById('statusTarefa').value = '';
}