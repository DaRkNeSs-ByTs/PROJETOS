package Associacao;

public class Main {

    public static void main(String[] args) {
        Associado associado = new Associado(
                1, "João Silva", "Rua A", "100", "12345-678", "Centro",
                "São Paulo", "SP", "11999999999", "123.456.789-00",
                "Ativo", "A001"
        );

        Colaborador colaborador = new Colaborador(
                2, "Maria Souza", "Av. B", "200", "87654-321", "Jardins",
                "São Paulo", "SP", "11888888888", "987.654.321-00",
                "Farmacêutica"
        );

        Fornecedor fornecedor = new Fornecedor(
                3, "Lab Farma", "Rua C", "300", "11223-445", "Bairro X",
                "São Paulo", "SP", "11777777777", "12.345.678/0001-99",
                "FarmaX", "www.farmax.com.br"
        );

        System.out.println("=== Associado ===");
        System.out.println(associado);

        System.out.println("\n=== Colaborador ===");
        System.out.println(colaborador);

        System.out.println("\n=== Fornecedor ===");
        System.out.println(fornecedor);

        associado.setNome("João Silva Jr.");
        System.out.println("\nNome do associado alterado: " + associado.getNome());
    }
}
