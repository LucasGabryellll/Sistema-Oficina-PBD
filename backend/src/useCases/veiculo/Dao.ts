import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Veiculo } from "./Model";

const _getAllVeiculos= () => { return 'SELECT * FROM VEICULO' }

const _getMarcaPorVeiculo = () => { return 'select marca,count(marca) as quantidade, from veiculo group by marca order by quantidade desc' }

const _getModeloPorVeiculo = () => { return 'select modelo,count(modelo) as quantidade, from veiculo group by modelo order by quantidade desc' }


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

    async getMarcaPorVeiculo() {
      const cursor = Connection();
      cursor.connect();
      const data = await cursor.query(_getMarcaPorVeiculo())
      cursor.end();
      return data.rows
    }

    async getModeloPorVeiculo() {
      const cursor = Connection();
      cursor.connect();
      const data = await cursor.query(_getModeloPorVeiculo())
      cursor.end();
      return data.rows
    }
  
  }