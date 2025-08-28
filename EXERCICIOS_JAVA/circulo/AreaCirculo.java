package circulo;
public class AreaCirculo {
  static private double PI = 3.14159;
  private double raio;
  private double area;

public void setRaio(double raio){
  this.raio = raio;
  area = PI * (raio * raio);

}
public double getArea(){
  return area;
  }

public double getpi(){
  return  PI;
}

public double getRaio(){
  return raio;
}



}
