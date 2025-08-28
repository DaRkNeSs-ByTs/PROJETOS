
package circulo;
public class Principal {
  public static void main(String[] args) {
    AreaCirculo circulo = new AreaCirculo();
    circulo.setRaio(10);
   
    System.out.println("Area do circulo: " + circulo.getArea());
    System.out.println("Valor de PI: " + circulo.getpi());
    System.out.println("Raio do circulo: " + circulo.getRaio());
  }
}
