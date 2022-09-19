import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import { Home } from './Pages/Home/Home';
import { Funcionario } from './Pages/Funcionario/Funcionario'
import { Cliente } from './Pages/Cliente/Cliente';
import { Login } from './Pages/Login/Login';
import { Veiculos } from './Pages/Veiculos/Veiculos';

import { ItemServico } from './Pages/ItemServico/ItemServico';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/funcionario' element={<Funcionario />} />
        <Route path='/cliente' element={<Cliente />} />
        <Route path='/veiculo' element={<Veiculos />}/>
        <Route path='/item_servico' element={<ItemServico />}/>
      </Routes>
    </Router>
  );
}