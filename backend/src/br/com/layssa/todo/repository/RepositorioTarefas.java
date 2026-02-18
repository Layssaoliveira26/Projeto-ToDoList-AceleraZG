package br.com.layssa.todo.repository;

import br.com.layssa.todo.model.Tarefa;
import java.util.LinkedList;

public class RepositorioTarefas {
    LinkedList<Tarefa> tarefas = new LinkedList<Tarefa>();
    private int contadorId = 0;

    public void criarTarefa(Tarefa tarefa) {
        //lembrar de depois realizar validações e formatações aqui antes de criar as tarefas
        tarefa.setId(contadorId + 1);
        contadorId++;
        tarefas.add(tarefa);

    }

    public void lerTarefas(String nome) {
        boolean encontrada = false;

        for (Tarefa tarefa : tarefas) {
            if (tarefa.getNome() != null && tarefa.getNome().toLowerCase().contains(nome.toLowerCase())) {
                System.out.println(tarefa.toString());
                encontrada = true;
            }
        }

        if (!encontrada) {
            System.out.println("Nenhuma tarefa encontrada com esse nome.");
        }
    }

    public void deletarTarefas(int id) {
        tarefas.remove(id);
    }
}
