import { request, Request, Response } from 'express';

import { FuncionarioDao } from './Dao';

const dao = new FuncionarioDao();

/**
 * Busca todos os clientes
 */
export const getAll_Funcionarios = async (request: Request, response: Response) => {

  const usuarios = await dao.getAll_Funcionarios();
  return response.json(usuarios);
}

/**
 * Busca um funcionario que é cliente
 */
export const getFuncionario_Cliente = async(request: Request, response: Response) => {
  const funcionario_cliente = await dao.getFuncionario_Cliente();
  
  try {
    return response.status(200).json(funcionario_cliente);

  } catch (error) {
    return response.status(400).json({
      message: "Erro ao buscar Funcionario que é um cliente"
    })
  }
}

export const getFuncionario_Salario_AcimaMedia = async(request: Request, response: Response) => {
  
  const salario_acima = await dao.getFuncionario_Salario_AcimaMedia();

  try {
    return response.status(200).json(salario_acima);
    
  } catch (error) {
    return response.status(400).json({
      message: "Erro ao listar funcionarios com salarios acima da média"
    })
  }
}
