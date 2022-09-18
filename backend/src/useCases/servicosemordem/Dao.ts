import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { ServicoEmOrdem } from "./Model";

const _getAllServicosEmOrdem= () => { return 'SELECT * FROM SERVICOSEMORDEM' }
export class ServicoEmOrdemDao {
    constructor(
  
    ) { }
  
    async getAll_ServicosEmOrdem() {
      const cursor = Connection();
      cursor.connect();
      const data = await cursor.query(_getAllServicosEmOrdem())
      cursor.end();
      return data.rows
    }
  
  }