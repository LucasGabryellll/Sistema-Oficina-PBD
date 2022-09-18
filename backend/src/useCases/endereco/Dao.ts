import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Endereco } from "./Model";

const _getAllEnderecos= () => { return 'SELECT * FROM ENDERECO' }

export class VeiculoDao {
    constructor(
  
    ) { }
  
    async getAllEndereco() {
      const cursor = Connection();
      cursor.connect();
      const data = await cursor.query(_getAllEnderecos())
      cursor.end();
      return data.rows
    }

  
  }