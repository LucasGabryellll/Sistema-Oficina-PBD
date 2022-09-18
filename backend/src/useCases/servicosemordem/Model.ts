export class ServicosEmOrdem {
    constructor(
      public id: number,
      public id_servico: number,
      public id_peca: number,
      public id_responsavel: number,
      public status: string,
      public valor: number,
    ) {}
  }