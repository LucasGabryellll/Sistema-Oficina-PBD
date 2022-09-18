import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { OrdemServico } from "./Model";

const _getAllOrdemservicos = () => { return 'SELECT * FROM ORDEMSERVICO' }

const _getClientesNaoAtendidos = () => {
  return `select o.id, v.placa, c.nome, c.cpfcnpj, o.status from veiculo v, cliente c, ordemservico o where  o.status = 'não concluido' and v.id_cliente = c.id and o.id_cliente = c.id`
}

export class OrdemServicoDao {
  constructor(

  ) { }

  async getAll_OrdemServicos() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getAllOrdemservicos())
    cursor.end();
    return data.rows
  }

  async getClientesNaoAtendidos() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getClientesNaoAtendidos())
    cursor.end();
    return data.rows
  }
}