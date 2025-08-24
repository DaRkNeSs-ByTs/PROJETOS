package Controle;

import modelo.Cliente;
import modelo.Veiculo;

public class Principal {
    public static void main(String[] args) {
        // Criando um cliente
        Cliente cliente1 = new Cliente(
                "123.456.789-00",
                "João da Silva",
                "Rua A, 100",
                "(11) 99999-9999",
                "joao@email.com"
        );

 
        Veiculo veiculo1 = new Veiculo(
                "ABC-1234",
                "Corolla",
                2025,
                "Toyota",
                "Preto"
        );

        // Exibindo dados
        System.out.println("=== Cliente ===");
        cliente1.exibirInfo();

        System.out.println("\n=== Veículo ===");
        veiculo1.exibirInfo();
    }
}
