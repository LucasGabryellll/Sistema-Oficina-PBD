import { request, Request, Response } from 'express';

import { PecaDao } from './Dao';

const dao = new PecaDao();

export const getAll_Pecas = async (request: Request, response: Response) => {

  const pecas = await dao.getAll_Pecas();
  response.header("Access-Control-Allow-Origin", "*");
  return response.json(pecas);
}