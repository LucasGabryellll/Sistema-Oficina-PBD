import { request, Request, Response } from 'express';

import { ClienteDao as ClienteDao } from './Dao';

const dao = new ClienteDao();

export const getAll_clientes = async (request: Request, response: Response) => {

  const cliente = await dao.getAllClientes();
  return response.json(cliente);
}
/**
 * Retorna o cliente da ordem de servico dos clientes
 */
export const getClientesTempoOrdemServico = async (request: Request, response: Response) => {

  try {
    const clientesTempoOrdemServico = await dao.getClientesTempoOrdemServico();
    return response.json(clientesTempoOrdemServico);

  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar"
    })
  }
}

export const getClientesDevedores = async (request: Request, response: Response) => {
  try {
    const clientesDevedores = await dao.getClientes_Devedores();
    return response.json(clientesDevedores);

  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar clientes devedores"
    })
  }
}
