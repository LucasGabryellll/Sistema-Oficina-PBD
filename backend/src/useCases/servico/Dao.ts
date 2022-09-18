import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Servico } from "./Model";

const _getAllServicos = () => { return 'SELECT * FROM SERVICO' }

const _getPecaPorServico = () => {
  return 'select so.id, s.nome as descricao_servico, pc.nome as peca from servicosemordem so, servico s, peca pc where id_servico = s.id and id_peca = pc.id'
}

export class ServicoDao {
  constructor(

  ) { }

  async getAll_Servicos() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getAllServicos())
    cursor.end();
    return data.rows
  }

  async getPecaPorServico() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_getPecaPorServico())
    cursor.end();
    return data.rows
  }


}