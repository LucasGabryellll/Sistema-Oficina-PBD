import { Express, Router, Response, Request } from 'express';

import { getAll_usuarios, create_usuario } from './useCases/usuario/controller';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json("Hello word");
})

routes.get('/usuarios', getAll_usuarios);
routes.post('/usuario/create_usuario', create_usuario);

export default routes;