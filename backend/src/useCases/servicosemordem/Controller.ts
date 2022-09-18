import { request, Request, Response } from 'express';

import { ServicosEmOrdemDao } from './Dao';

const dao = new ServicosEmOrdemDao();

export const getAll_ServicosEmOrdem = async (request: Request, response: Response) => {

  const servicosEmOrdem = await dao.getAll_ServicosEmOrdem();
  return response.json(servicosEmOrdem);
}