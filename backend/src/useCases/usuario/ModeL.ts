import { Usuario } from "../../entities/Usuario";
import { CreateUsuarioDTO } from "./CreateUsuarioDTO";

export class Model {
  constructor(
    public id: number,
    public login: string,
    public senha: string,
    public tipo: string
  ) {}

}