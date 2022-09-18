import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { OrdemServico } from "./Model";

const _getAllOrdemservicos= () => { return 'SELECT * FROM ORDEMSERVICO' }




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
  
  }