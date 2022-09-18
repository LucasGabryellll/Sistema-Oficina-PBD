import { request, Request, Response } from 'express';

import { VeiculoDao } from './Dao';

const dao = new VeiculoDao();

export const getAll_Veiculos = async (request: Request, response: Response) => {

  const veiculos = await dao.getAll_Veiculos();
  return response.json(veiculos);
}