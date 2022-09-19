
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import './Home.css'

export function Home() {
  
  return (
    <div>
      <h1>Pagina Home</h1>
      <ul>
        <li>
          <Link to="/funcionario">Funcionario</Link>
        </li>
        <li>
          <Link to="/item_servico">Item do serviço</Link>
        </li>
        <li>
          <Link to="/veiculo">Veiculo</Link>
        </li>
        <li>
          <Link to="/cliente">Cliente</Link>
        </li>
      </ul>
    </div>
  )
}