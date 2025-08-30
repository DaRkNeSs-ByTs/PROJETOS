package ProjetoVigas;

import javax.swing.JOptionPane;

public class CalculadoraVolumeViga {
    public static void main(String[] args) {
        try {
            // Entrada de dados via JOptionPane
            double base = Double.parseDouble(
                JOptionPane.showInputDialog("Informe a base da viga (em metros):")
            );

            double altura = Double.parseDouble(
                JOptionPane.showInputDialog("Informe a altura da viga (em metros):")
            );

            double comprimento = Double.parseDouble(
                JOptionPane.showInputDialog("Informe o comprimento da viga (em metros):")
            );

            // Criação do objeto viga
            Viga viga = new Viga(base, altura, comprimento);

            // Cálculo do volume
            double volume = viga.calcularVolume();

            // Exibição do resultado
            JOptionPane.showMessageDialog(
                null,
                "O volume de concreto da viga é: " + volume + " m³"
            );

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Entrada inválida! Digite apenas números.");
        }
    }
}
