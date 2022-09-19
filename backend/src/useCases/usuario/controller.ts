import { request, Request, Response } from 'express';

import { UsuarioDao } from './Dao';
import { ConnectDB, Connection } from '../../ConnectionDB/connection';

const dao = new UsuarioDao();

export const getAll_usuarios = async (request: Request, response: Response) => {
  const usuarios = await dao.getAll_usuarios();
  return response.json(usuarios);
}

export const create_usuario = async (request: Request, response: Response) => {
  try {
    await dao.save_Usuario(request.body);

    const idUsuario = request.body.id
    response.header("Access-Control-Allow-Origin", "*");
    response.status(200).json({
      id: idUsuario,
      message: "Usuario cadastrado com sucesso"
    })
  } catch (error) {
    return response.status(400).json({
      message: "Erro ao salvar usuario, verifique se todos os paramentros estão corretos"
    });
  }
}