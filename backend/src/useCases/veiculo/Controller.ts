import { request, Request, Response } from 'express';

import { VeiculoDao } from './Dao';

const dao = new VeiculoDao();

/**
 * Lista todos os veiculos cadastrados para na oficina
 */
export const getAll_Veiculos = async (request: Request, response: Response) => {

  const veiculos = await dao.getAll_Veiculos();
  response.header("Access-Control-Allow-Origin", "*");
  return response.json(veiculos);
}

/**
 * Lista os veiculos por marca
 */
export const getMarcaPorVeiculo = async (request: Request, response: Response) => {
  
  try {
    const marcaPorVeiculo = await dao.getMarcaPorVeiculo();
    response.header("Access-Control-Allow-Origin", "*");
    return response.status(200).json(marcaPorVeiculo);

  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar as marcas por veiculo"
    })
  }
}

/**
 * Lista os veiculos por modelo
 */
export const getModeloPorVeiculo = async (request: Request, response: Response) => {
  
  try {
    const modeloPorVeiculo = await dao.getModeloPorVeiculo();
    response.header("Access-Control-Allow-Origin", "*");
    return response.status(200).json(modeloPorVeiculo);

  } catch (error) {

    return response.status(400).json({
      message: "Erro ao buscar os modelos por veiculo"
    })
  }
}