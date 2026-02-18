package br.com.layssa.todo;

import br.com.layssa.todo.model.Tarefa;
import br.com.layssa.todo.repository.RepositorioTarefas;

import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        RepositorioTarefas tarefas = new RepositorioTarefas();

        Scanner scanner = new Scanner(System.in);
        String input;

        while (true) {
            System.out.println("Digite a numeração da ação que você deseja realizar:");
            System.out.println("1 - Criar tarefa");
            System.out.println("2 - Ler tarefa");
            System.out.println("3 - Deletar tarefa");
            System.out.println("esc - Sair");

            input = scanner.nextLine();

            if (input.equalsIgnoreCase("esc")) {
                break;
            }

            switch (input) {

                case "1":
                    System.out.println("Digite o nome da tarefa que você deseja cadastrar:");
                    String tituloTarefa = scanner.nextLine();

                    System.out.println("Digite a descrição da tarefa que você deseja cadastrar:");
                    String descricaoTarefa = scanner.nextLine();

                    System.out.println("Digite a data de término da tarefa que você deseja cadastrar.Ex: 20/10/2026:");
                    String dataTarefa = scanner.nextLine();

                    System.out.println("Digite a categoria da tarefa que você deseja cadastrar.");
                    String categoriaTarefa = scanner.nextLine();

                    System.out.println("Digite o status da tarefa que você deseja cadastrar.");
                    String statusTarefa = scanner.nextLine();

                    Tarefa novaTarefa = new Tarefa(
                            tituloTarefa,
                            descricaoTarefa,
                            dataTarefa,
                            categoriaTarefa,
                            statusTarefa
                    );

                    tarefas.criarTarefa(novaTarefa);
                    System.out.println("Tarefa cadastrada com sucesso!");
                    break;

                case "2":
                    System.out.println("Digite o nome da tarefa: ");
                    String tituloBusca = scanner.nextLine();
                    tarefas.lerTarefas(tituloBusca);
                    break;

                case "3":
                    System.out.println("Digite o id da tarefa");
                    try {
                        int idTarefa = Integer.parseInt(scanner.nextLine());
                        tarefas.deletarTarefas(idTarefa);
                        System.out.println("Tarefa deletada com sucesso!");
                    } catch (NumberFormatException e) {
                        System.out.println("Por favor, digite um número válido.");
                    }
                    break;

                default:
                    System.out.println("Opção inválida.");
            }
        }
        scanner.close();
    }
}