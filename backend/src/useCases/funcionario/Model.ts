export class Funcionario {
  constructor(
    public id: number,
    public nome: string,
    public cpf: string,
    public rg: string,
    public telefone: string,
    public admissao: Date,
    public salario: number,
    public especialidade: string,
    public foto: string,
  ) {}
}