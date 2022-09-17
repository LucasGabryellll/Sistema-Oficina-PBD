import { Connection, ConnectDB } from '../../ConnectionDB/connection';
import { Model } from "./ModeL";

const _createUsuario = (id: number, login: string, senha: string, tipo: string) => {
  return `INSERT INTO USUARIO(id, login, senha, tipo) VALUES(${id}, '${login}', '${senha}', '${tipo}')`
};

const _selectAllUsuarios = () => {return 'SELECT * FROM USUARIO'}

export class UsuarioDao {
  constructor(
    
  ) {}

  async save_Usuario(usuario: Model) {
    const cursor = Connection();
    cursor.connect();
    cursor.query(_createUsuario(usuario.id, usuario.login, usuario.senha, usuario.tipo), (err, res) => {
      cursor.end();
    });
    return usuario.id
  }

  async getAll_usuarios() {
    const cursor = Connection();
    cursor.connect();
    const data = await cursor.query(_selectAllUsuarios())
    cursor.end();
    return data.rows
  }
}