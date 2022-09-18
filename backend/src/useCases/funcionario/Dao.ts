import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Funcionario } from "./Model";

const _getAllFuncionarios = () => { return 'SELECT * FROM FUNCIONARIO' }

const _getFuncionario_Cliente = () => {
  return 'select f.nome, f.cpf from funcionario f, cliente c where cpf = c.cpfcnpj'
}

const _getFuncionarioSalarioAcimaMedia = () => {
  return `select nome, salario from funcionario where salario >=(select sum(salario)/count(*) from funcionario) and admissao >= '2020-01-01'`
}

export class FuncionarioDao {
  constructor(

  ) { }

  async getAll_Funcionarios() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getAllFuncionarios())
    cursor.end();
    return data.rows
  }

  async getFuncionario_Cliente() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getFuncionario_Cliente())
    cursor.end();
    return data.rows
  }

  async getFuncionario_Salario_AcimaMedia() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getFuncionarioSalarioAcimaMedia());
    cursor.end();
    return data.rows
  }
}