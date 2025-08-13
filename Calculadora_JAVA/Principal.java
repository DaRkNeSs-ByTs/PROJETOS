import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            CalculadoraControle controle = new CalculadoraControle();
            
            System.out.print("Digite o primeiro número: ");
            double num1 = sc.nextDouble();
            
            System.out.print("Digite o segundo número: ");
            double num2 = sc.nextDouble();
            
            System.out.println("Escolha a operação: 1-Soma  2-Subtração  3-Multiplicação  4-Divisão");
            int opcao = sc.nextInt();
            
            Calculo operacao;
            
            switch (opcao) {
                case 1 -> operacao = new Soma();
                case 2 -> operacao = new Subtracao();
                case 3 -> operacao = new Multiplicacao();
                case 4 -> operacao = new Divisao();
                default -> {
                    System.out.println("Opção inválida");
                    sc.close();
                    return;
                }
            }
            
            double resultado = controle.executarCalculo(operacao, num1, num2);
            System.out.println("Resultado: " + resultado);
        }
    }
}
