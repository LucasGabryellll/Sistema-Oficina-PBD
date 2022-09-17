import { ConnectDB, Connection } from '../ConnectionDB/connection';

export class Usuario {
  public readonly id: number;

  public login: string;
  public senha: string;
  public tipo: string;

  constructor(props: Omit<Usuario, 'id'>, id?: number) {
    Object.assign(this, props);

    if(!id) {
      this.id = id;
    }
  };
}