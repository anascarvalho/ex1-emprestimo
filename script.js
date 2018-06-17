let idade = 0;
let valorEmprestimo = 0;
let salario = 0;
let parcela = 0;
let valorTotal = 0;
let vparcela= 0;

idade = prompt("Qual a idade do cliente?");
valorEmprestimo = prompt("Qual o valor que o cliente quer emprestado?");
salario = prompt("Qual o salário do cliente?");
nparcela = prompt("Qual a quantidade de parcelas?");


valorTotal = valorEmprestimo * Math.pow((1+0.08),nparcela);
vparcela = valorTotal/nparcela;

idade = Number(idade);
valorEmprestimo = Number(valorEmprestimo);
salario = Number(salario);
nparcela = Number(nparcela);



if(isNaN(idade)||isNaN(valorEmprestimo)||isNaN(salario)){
    alert("ERRO: VALOR INVÁLIDO! INSIRA APENAS NÚMEROS!");
}else if((idade  >= 22 && idade <= 55) && (valorEmprestimo >=1000 && valorEmprestimo <= (15*salario)) ){
    alert("ACEITO\nValor total para pagamento: " + valorTotal + "\nValor de cada parcela: R$" + vparcela);
}else{
    alert("NÃO ACEITO");
}


