import { Cliente, Telefone, Endereco, Empresa } from "./models.js";


const enderecoEmpresa = new Endereco("Av. Andromeda", 1000, "São José dos Campos", "SP");


const empresa = new Empresa("Tech Solutions Ltda", "Tech Solutions", "12.345.678/0001-99", enderecoEmpresa);


empresa.telefones.add(new Telefone(11, "99999-1111"));
empresa.telefones.add(new Telefone(11, "98888-2222"));


const cliente1 = new Cliente("João", "111.222.333-44", new Endereco("Av. Andromeda", 1000, "São José dos Campos", "SP"));
cliente1.telefones.add(new Telefone(12, "99999999"));
cliente1.telefones.add(new Telefone(12, "99999998"));


const cliente2 = new Cliente("Lucas", "222.222.222-22", new Endereco("Av. Andromeda", 900, "São José dos Campos", "SP"))
cliente2.telefones.add(new Telefone(12, "998888888"));
cliente2.telefones.add(new Telefone(12, "977777777"));

const cliente3 = new Cliente("Ana", "233.222.222-22", new Endereco("Av. Andromeda", 905, "São José dos Campos", "SP"))
cliente3.telefones.add(new Telefone(12, "948888888"));
cliente3.telefones.add(new Telefone(12, "987777777"));

const cliente4 = new Cliente("Joana", "322.333.333-33", new Endereco("Av. Andromeda", 800, "São José dos Campos", "SP"))
cliente4.telefones.add(new Telefone(12, "998777777"));
cliente4.telefones.add(new Telefone(12, "000000000"));

const cliente5 = new Cliente("Diego", "321.222.222-33", new Endereco("Av. Andromeda", 700, "São José dos Campos", "SP"))
cliente5.telefone.add(new Telefone(12, "981231234"));
cliente5.telefone.add(new Telefone(12, "913333456"));

empresa.clientes.add(cliente1);
empresa.clientes.add(cliente2);
empresa.clientes.add(cliente3);
empresa.clientes.add(cliente4);
empresa.clientes.add(cliente5);

console.log(empresa.descricao());