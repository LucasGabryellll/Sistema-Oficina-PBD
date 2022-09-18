import { request, Request, Response } from 'express';

import { VeiculoDao } from './Dao';

const dao = new VeiculoDao();

export const getAll_Veiculos = async (request: Request, response: Response) => {

  const veiculos = await dao.getAll_Veiculos();
  return response.json(veiculos);
}

export const getMarcaPorVeiculo = async (request: Request, response: Response) => {
  const marcaPorVeiculo = await dao.getMarcaPorVeiculo();

  try{
    return response.status(200).json(marcaPorVeiculo);
  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar as marcas por veiculp"
    })
  }
}

export const getModeloPorVeiculo = async (request: Request, response: Response) => {
  const modeloPorVeiculo = await dao.getModeloPorVeiculo();

  try{
    return response.status(200).json(modeloPorVeiculo);
  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar os modelos por veiculo"
    })
  }
}