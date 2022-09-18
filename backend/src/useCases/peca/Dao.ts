import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Peca } from "./Model";

const _getAllPecas= () => { return 'SELECT * FROM PECA' }
export class PecaDao {
    constructor(
  
    ) { }
  
    async getAll_Pecas() {
      const cursor = Connection();
      cursor.connect();
      const data = await cursor.query(_getAllPecas())
      cursor.end();
      return data.rows
    }
  
  }