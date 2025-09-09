public class Producao {

    int previsaoDemanda = 200;
    int producaoNormal = 250;
    int estoqueInicial = 50;
    int estoqueFinal;

    public static void main(String[] args) {
        Producao p = new Producao();

        p.estoqueFinal = (p.estoqueInicial + p.producaoNormal) - p.previsaoDemanda;

        System.out.println("O estoque final previsto para o mês é de: "
                           + p.estoqueFinal + " Unidades");
    }
}
