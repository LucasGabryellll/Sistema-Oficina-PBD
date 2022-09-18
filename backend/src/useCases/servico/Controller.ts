import { request, Request, Response } from 'express';

import { ServicoDao } from './Dao';

const dao = new ServicoDao();

export const getAll_Servicos = async (request: Request, response: Response) => {

  const servicos = await dao.getAll_Servicos();
  return response.json(servicos);
}