package Associacao;

public class Associados extends Pessoa {

    private String situacao;
    private String numeroAssociado;

    public Associados(int id, String nome, String logradouro, String numero,
            String cep, String bairro, String cidade, String uf,
            String telefone, String cpfCnpj, String situacao,
            String numeroAssociado) {
        super(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj);
        this.situacao = situacao;
        this.numeroAssociado = numeroAssociado;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public String getNumeroAssociado() {
        return numeroAssociado;
    }

    public void setNumeroAssociado(String numeroAssociado) {
        this.numeroAssociado = numeroAssociado;
    }

    @Override
    public String toString() {
        return super.toString()
                + ", Situação: " + situacao
                + ", Número Associado: " + numeroAssociado;
    }
}
