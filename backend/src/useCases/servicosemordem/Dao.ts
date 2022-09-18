import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { ServicosEmOrdem } from "./Model";

const _getAllServicosEmOrdem= () => { return 'SELECT * FROM SERVICOSEMORDEM' }
export class ServicosEmOrdemDao {
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