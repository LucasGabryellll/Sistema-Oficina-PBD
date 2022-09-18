import { Express, Router, Response, Request } from 'express';

import {
  getAll_usuarios,
  create_usuario
} from './useCases/usuario/controller';

import {
  getAll_Funcionarios,
  getFuncionario_Cliente,
  getFuncionario_Salario_AcimaMedia
} from './useCases/funcionario/controller';

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

export default routes;