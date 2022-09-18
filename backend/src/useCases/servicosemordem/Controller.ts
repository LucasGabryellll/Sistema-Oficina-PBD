import { request, Request, Response } from 'express';

import { ServicoEmOrdemDao } from './Dao';

const dao = new ServicoEmOrdemDao();

export const getAll_ServicosEmOrdem = async (request: Request, response: Response) => {

  const servicosEmOrdem = await dao.getAll_ServicosEmOrdem();
  return response.json(servicosEmOrdem);
}