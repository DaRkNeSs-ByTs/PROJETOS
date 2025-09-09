
class VeiculoPasseio {
    private String placa, marca, modelo;
    private int portas, passageiros;
    public VeiculoPasseio(String placa, String marca, String modelo, int portas, int passageiros) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.portas = portas;
        this.passageiros = passageiros;
    }

    @Override
    public String toString() {
        return "VeiculoPasseio{" +
                "placa='" + placa + '\'' +
                ", marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", portas=" + portas +
                ", passageiros=" + passageiros +
                '}';
    }
}

class VeiculoCarga {
    private String placa, marca, modelo;
    private int capacidade;
    public VeiculoCarga(String placa, String marca, String modelo, int capacidade) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.capacidade = capacidade;
    }
    
    @Override
    public String toString() {
        return "VeiculoCarga{" +
                "placa='" + placa + '\'' +
                ", marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", capacidade=" + capacidade +
                '}';
    }
}

public class Main {
    public static void main(String[] args) {
        VeiculoPasseio carro = new VeiculoPasseio("ABC-1234", "Toyota", "Corolla", 4, 5);
        VeiculoCarga caminhao = new VeiculoCarga("XYZ-9876", "Volvo", "FH", 20000);

        System.out.println(carro);
        System.out.println(caminhao);
    }
}
