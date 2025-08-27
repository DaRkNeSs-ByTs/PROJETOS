public  class  Carro {

  private   String marca;
  private   String modelo;


  public Carro(String modelo, String marca){
    this.modelo = modelo;
    this.marca = marca;
  }

  public String getMarca(){
    return marca;
  }

  public String getModelo(){
    return modelo;
  }

public void setmarca(String marca){
  this.marca = marca;
}
public void setmodelo(String modelo){
  this.modelo = modelo;
}

public void acelerar(){
//criar o metodo acelerar
}

public void frear(){
//criar o metodo frear
}


Carro carro = new Carro("Gol", "Volkswagen");
 System.out.println(meuCarro.getModelo());
 System.out.println(meuCarro.getMarca());
 

//meuCarro.acelerar();
//meuCarro.frear(); 










}