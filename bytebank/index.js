import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {Autenticacao} from "./Autenticacao.js"

const diretor =  new Diretor("Bob", 1000, 12345678910);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Alice",  500, 12378945601);
gerente.cadastrarSenha("654321");

const cliente = new Cliente("Carlos", 78945612379, "456");
const gerenteEstaLogado = Autenticacao.login(gerente, "123");
const diretorEstaLogado = Autenticacao.login(diretor, "123456");


const clienteEstaLogado = Autenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);