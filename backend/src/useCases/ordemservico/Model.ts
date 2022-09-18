export class OrdemServico {
    constructor(
      public id: number,
      public id_funcionario: number,
      public id_cliente: number,
      public id_veiculo: number,
      public entrda: Date,
      public saida: Date,
      public status: string,
    ) {}
  }