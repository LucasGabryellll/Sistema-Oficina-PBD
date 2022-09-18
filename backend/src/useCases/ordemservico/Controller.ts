import { request, Request, Response } from 'express';

import { OrdemServicoDao } from './Dao';

const dao = new OrdemServicoDao();

export const getAll_OrdemServicos = async (request: Request, response: Response) => {

  const veiculos = await dao.getAll_OrdemServicos();
  return response.json(veiculos);
}

/**
 * Retorna os clientes não atendidos
 */
 export const getClientesNaoAtendidos = async (request: Request, response: Response) => {

  try {
    const clientesNaoAtendidos = await dao.getClientesNaoAtendidos();
    return response.json(clientesNaoAtendidos);

  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar"
    })
  }
}