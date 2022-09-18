import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Cliente } from "./Model";

const _getAllClientes= () => { return 'SELECT * FROM CLIENTE' }

const _getClientesTempoOrdemServico= () => { return 'select c.nome, o.id, entrada, o.saida, o.saida-o.entrada as tempo from ordemservico o, cliente c where o.id = c.id' }


const _getClientesNaoAtendidos= () => { return `select v.placa, c.nome, c.cpfcnpj, o.status from veiculo v, cliente c, ordemservico o where  o.status = 'não concluido' and v.id_cliente = c.id and o.id_cliente = c.id` }


export class ClienteDao {
    constructor(
  
    ) { }
  
    async getAllClientes() {
      const cursor = Connection();
      cursor.connect();
      const data = await cursor.query(_getAllClientes())
      cursor.end();
      return data.rows
    }

    async getClientesTempoOrdemServico() {
      const cursor = Connection();
      cursor.connect();
      const data = await cursor.query(_getClientesTempoOrdemServico())
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