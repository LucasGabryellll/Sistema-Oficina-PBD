export class Endereco {
    constructor(
      public id: number,
      public logradouro: string,
      public numero: number,
      public cidade: string,
      public estado: string,
      public cep: number,
    ) {}
  }