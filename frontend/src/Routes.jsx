import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import { Home } from './Pages/Home/Home';
import { Funcionarion } from './Pages/Funcionario/Funcionario'
import { Cliente } from './Pages/Cliente/Cliente';
import { Login } from './Pages/Login/Login';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/funcionario' element={<Funcionarion />} />
        <Route path='/cliente' element={<Cliente />} />
      </Routes>
    </Router>
  );
}