import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Servico } from "./Model";

const _getAllServicos= () => { return 'SELECT * FROM SERVICO' }
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
  
  }