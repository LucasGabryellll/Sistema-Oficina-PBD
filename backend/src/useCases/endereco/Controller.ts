import { request, Request, Response } from 'express';

import { VeiculoDao as EnderecoDao } from './Dao';

const dao = new EnderecoDao();

export const getAll_Veiculos = async (request: Request, response: Response) => {

  const enderecos = await dao.getAllEndereco();
  response.header("Access-Control-Allow-Origin", "*");
  return response.json(enderecos);
}
