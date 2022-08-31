public class TesteFuncionario {
    public static void main(String[] args) {
        Funcionario func1 = new Gerente();

        func1.setNome("Fernanda Broch");
        func1.setCpf("123456789-0");
        func1.setSalario(2000.00);
        Double func1Bonificacao = func1.getBonificacao();

        System.out.println(func1.getNome());
        System.out.println(func1Bonificacao);


    }
}
