let registroTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let listagemTarefas = document.getElementsByClassName('listaTarefas');
let indiceEditando = null;

function salvarTarefa(event) {
    event.preventDefault();
    const dados = {
        titulo: document.getElementById('tituloTarefa').value,
        descricao: document.getElementById('descricaoTarefa').value,
        dataTermino: document.getElementById('dataTerminoTarefa').value,
        categoria: document.getElementById('categoriaTarefa').value,
        status: document.getElementById('statusTarefa').value
    };
    
    let indiceEditando = localStorage.getItem('indiceEditando');
    if (indiceEditando !== null) {
        registroTarefas[indiceEditando] = dados;
        localStorage.removeItem('indiceEditando');
    } else {
        registroTarefas.push(dados);
    }
    
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
                    <button onclick="editarTarefa(${i})">Editar</button>
                    <button onclick="excluirTarefa(${i})">Excluir</button>
                </div>
            `;
        }
}

function editarTarefa(posicao) {
    localStorage.setItem('indiceEditando', posicao);
    window.location.href = 'index.html';
}

function excluirTarefa(posicao) {
    registroTarefas.splice(posicao, 1);
    localStorage.setItem('tarefas', JSON.stringify(registroTarefas));
    listarTarefas();
}

function carregarEdicao() {
    let indiceEditando = localStorage.getItem('indiceEditando');
    if (indiceEditando !== null) {
        let tarefa = registroTarefas[indiceEditando];
        document.getElementById('tituloTarefa').value = tarefa.titulo;
        document.getElementById('descricaoTarefa').value = tarefa.descricao;
        document.getElementById('dataTerminoTarefa').value = tarefa.dataTermino;
        document.getElementById('categoriaTarefa').value = tarefa.categoria;
        document.getElementById('statusTarefa').value = tarefa.status;
    }
}

function limparFormulario() {
    document.getElementById('tituloTarefa').value = '';
    document.getElementById('descricaoTarefa').value = '';
    document.getElementById('dataTerminoTarefa').value = '';
    document.getElementById('categoriaTarefa').value = '';
    document.getElementById('statusTarefa').value = '';
}