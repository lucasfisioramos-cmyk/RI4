import { Cliente, Telefone, Endereco, Empresa } from "./models.js";

// Endereço da empresa
const enderecoEmpresa = new Endereco("Av. Andromeda", 1000, "São José dos Campos", "SP");

// Empresa
const empresa = new Empresa("Tech Solutions Ltda", "Tech Solutions", "12.345.678/0001-99", enderecoEmpresa);

// Telefones da empresa
empresa.telefones.add(new Telefone(11, "99999-1111"));
empresa.telefones.add(new Telefone(11, "98888-2222"));

// Cliente 1
const cliente1 = new Cliente("João", "111.222.333-44", new Endereco("Av. Andromeda", 1000, "São José dos Campos", "SP"));
cliente1.telefones.add(new Telefone(12, "99999999"));
cliente1.telefones.add(new Telefone(12, "99999998"));

//cliente 2 
const cliente2 = new Cliente("Lucas", "222.222.222-22", new Endereco("Av. Andromeda", 900, "São José dos Campos", "SP"))
cliente2.telefones.add(new Telefone(12, "998888888"));
cliente2.telefones.add(new Telefone(12, "977777777"));

empresa.clientes.add(cliente1);
empresa.clientes.add(cliente2);

// Exemplo de saída
console.log(empresa.descricao());
