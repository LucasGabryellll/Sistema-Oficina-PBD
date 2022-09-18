import { request, Request, Response } from 'express';

import { OrdemServicoDao } from './Dao';

const dao = new OrdemServicoDao();

export const getAll_OrdemServicos = async (request: Request, response: Response) => {

  const veiculos = await dao.getAll_OrdemServicos();
  return response.json(veiculos);
}