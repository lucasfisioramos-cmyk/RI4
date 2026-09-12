class Cliente {
  #cpf;
  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefones = new Set();
    this.#cpf = cpf;
  }
  get cpf() {
    return this.#cpf;
  }

  descricao() {
    let desc = `Nome: ${this.nome}\n`;
    desc += `Estado: ${this.endereco.estado} cidade: ${this.endereco.cidade} rua: ${this.endereco.rua} numero: ${this.endereco.numero}\n`;
    for (const tel of this.telefones) {
      desc += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
    }
    return desc;
  }
}

class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }
}

class Endereco {
  constructor(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
  }
}

class Empresa {
  #cnpj;
  constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
    this.endereco = endereco;
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.#cnpj = cnpj;
    this.clientes = new Set();
    this.telefones = new Set();
  }
  get cnpj() {
    return this.#cnpj;
  }

  descricao() {
    let desc = `Razão Social: ${this.razaoSocial}\n`;
    desc += `Nome fantasia: ${this.nomeFantasia}\n`;
    desc += "--------------------\n";
    for (const cliente of this.clientes) {
      desc += cliente.descricao() + "\n";
    }
    return desc;
  }
}

export { Cliente, Telefone, Endereco, Empresa };