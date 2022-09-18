import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Veiculo } from "./Model";

const _getAllVeiculos= () => { return 'SELECT * FROM VEICULO' }
export class VeiculoDao {
    constructor(
  
    ) { }
  
    async getAll_Veiculos() {
      const cursor = Connection();
      cursor.connect();
      const data = await cursor.query(_getAllVeiculos())
      cursor.end();
      return data.rows
    }
  
  }