import { request, Request, Response } from 'express';

import { ClienteDao as ClienteDao } from './Dao';

const dao = new ClienteDao();

export const getAll_clientes = async (request: Request, response: Response) => {

  const cliente = await dao.getAllClientes();
  return response.json(cliente);
}


export const getClientesTempoOrdemServico = async (request: Request, response: Response) => {

  const clientesTempoOrdemServico = await dao.getClientesTempoOrdemServico();
  
  try {
    return response.json(clientesTempoOrdemServico);

  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar"
    })
  }
}


export const getClientesNaoAtendidos = async (request: Request, response: Response) => {

  const clientesNaoAtendidos = await dao.getClientesNaoAtendidos();
  
  try {
    return response.json(clientesNaoAtendidos);

  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar"
    })
  }
}

