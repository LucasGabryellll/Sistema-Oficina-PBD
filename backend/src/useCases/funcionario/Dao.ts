import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Funcionario } from "./Model";

const _getAllFuncionarios = () => { return 'SELECT * FROM FUNCIONARIO' }

const _getFuncionario_Cliente = () => {
  return 'select f.nome, f.cpf from funcionario f, cliente c where cpf = c.cpfcnpj'
}

const _getFuncionarioSalarioAcimaMedia = () => {
  return `select nome, salario from funcionario where salario >=(select sum(salario)/count(*) from funcionario) and admissao >= '2020-01-01'`
}

const _getMecanicoa_In_all_servicos = () => {
  return 'select f.nome, so.id_funcionario, c.placa, so.id as id_servico ' +
    'from funcionario f, ordemservico so, veiculo c ' +
    'where f.id = so.id_funcionario and c.id_cliente = so.id_cliente'
}

const _getFuncionarios_salario_igual = () => {
  return `Select nome, salario from funcionario where salario in (SELECT salario from funcionario GROUP BY salario having count(salario) > 1)`
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

  async getMecanico_in_all_servicos() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getMecanicoa_In_all_servicos());
    cursor.end();
    return data.rows
  }

  async getFuncionarios_salario_igual() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getFuncionarios_salario_igual());
    cursor.end();
    return data.rows
  }
}