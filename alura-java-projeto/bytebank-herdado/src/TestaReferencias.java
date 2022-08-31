public class TestaReferencias {
    public static void main(String[] args) {
        Gerente g1 = new Gerente();

        g1.setNome("Fernanda B");
        g1.setSalario(6000.00);

        ControleBonificacao controle = new ControleBonificacao();
        controle.registra(g1);

        System.out.println(controle.getSoma());
    }
}
