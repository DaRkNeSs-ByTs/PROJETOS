import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Operacoes op = new Operacoes();

        System.out.print("Digite o primeiro número: ");
        double num1 = sc.nextDouble();

        System.out.print("Digite o segundo número: ");
        double num2 = sc.nextDouble();

        System.out.println("Escolha a operação: +  -  *  /");
        String escolha = sc.next();

        double resultado = 0;

        switch (escolha) {
            case "+":
                resultado = op.somar(num1, num2);
                break;
            case "-":
                resultado = op.subtrair(num1, num2);
                break;
            case "*":
                resultado = op.multiplicar(num1, num2);
                break;
            case "/":
                resultado = op.dividir(num1, num2);
                break;
            default:
                System.out.println("Operação inválida!");
                sc.close();
                return;
        }

        System.out.println("Resultado: " + resultado);
        sc.close();
    }
}
