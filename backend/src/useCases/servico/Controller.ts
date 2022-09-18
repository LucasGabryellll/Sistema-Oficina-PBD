import { request, Request, Response } from 'express';

import { ServicoDao } from './Dao';

const dao = new ServicoDao();

export const getAll_Servicos = async (request: Request, response: Response) => {

  const servicos = await dao.getAll_Servicos();
  return response.json(servicos);
}


export const getPecaPorServico = async (request: Request, response: Response) => {
  
  try {
    const pecaporserivo = await dao.getPecaPorServico();
    return response.status(200).json(pecaporserivo);

  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar os itens de serviço dado um determinado serviço"
    })
  }
  
}