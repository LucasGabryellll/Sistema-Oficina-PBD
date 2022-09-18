import { request, Request, Response } from 'express';

import { VeiculoDao as EnderecoDao } from './Dao';

const dao = new EnderecoDao();

export const getAll_Veiculos = async (request: Request, response: Response) => {

  const enderecos = await dao.getAllEndereco();
  return response.json(enderecos);
}
