import { Express, Router, Response, Request } from 'express';

import {
  getAll_usuarios,
  create_usuario
} from './useCases/usuario/controller';

import {
  getAll_Funcionarios,
  getFuncionario_Cliente,
  getFuncionario_Salario_AcimaMedia,
  getMecanico_in_all_servicos,
  getFuncionario_salario_igual
} from './useCases/funcionario/controller';

import {
  getAll_clientes,
  getClientesTempoOrdemServico,
  getClientesNaoAtendidos,
  getClientesDevedores
} from './useCases/cliente/Controller';

import {
  getAll_Veiculos,
  getMarcaPorVeiculo,
  getModeloPorVeiculo
} from './useCases/veiculo/Controller';


import {
  getAll_Servicos,
  getPecaPorServico
} from './useCases/servico/Controller';


const routes = Router();

routes.get('/', (request, response) => {
  return response.json("Hello word");
})

/**
 * Rotas para a tabela usuario
 */
routes.get('/usuarios', getAll_usuarios);
routes.post('/usuario/create_usuario', create_usuario);

/**
 * Rotas para a tabela funcionario
 */
routes.get('/funcionarios', getAll_Funcionarios);
routes.get('/funcionario/cliente', getFuncionario_Cliente);
routes.get('/funcionario/salario_acimaMedia', getFuncionario_Salario_AcimaMedia);
routes.get('/funcionario/todos_servicos', getMecanico_in_all_servicos);
routes.get('/funcionario/salario_igual', getFuncionario_salario_igual);
/**
 * Rotas para a tabela cliente
 */
routes.get('/clientes', getAll_clientes);
routes.get('/cliente/tempo_servico', getClientesTempoOrdemServico);
routes.get('/cliente/clientes_nao_atendidos', getClientesNaoAtendidos);
routes.get('/cliente/devedor', getClientesDevedores);
/**
 * Rotas para a tabela endereco
 */

/**
 * Rotas para a tabela veiculo
 */
routes.get('/veiculos', getAll_Veiculos);
routes.get('/veiculo/marca', getMarcaPorVeiculo);
routes.get('/veiculo/modelo', getModeloPorVeiculo);

/**
 * Rotas para a tabela serviço
 */
routes.get('/servicos', getAll_Servicos);
routes.get('/servico/peca', getPecaPorServico);

/**
 * Rotas para a tabela cliente
 */

export default routes;