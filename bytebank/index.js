import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente("Bob", 11122233344);
console.log("Dados do cliente: ", cliente1);

const cliente2 = new Cliente("Alice", 11122233355);
console.log("Dados do cliente: ", cliente2);

const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);
console.log("Conta de ", cliente1.nome, "tem R$", conta1.saldo);

const conta2 = new ContaCorrente(1002, cliente2);
console.log("Conta de ", cliente2.nome, "tem R$", conta2.saldo);

conta1.transferir(200, conta2);
console.log("Após transferir da conta de", conta1.cliente.nome, "conta de", conta2.cliente.nome, "tem R$", conta2.saldo);
console.log("Número de Contas Correntes: ", ContaCorrente.nContas);
