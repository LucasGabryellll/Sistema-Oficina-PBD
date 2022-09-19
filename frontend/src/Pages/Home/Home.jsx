
import { BrowserRouter as Router, Link } from 'react-router-dom'

import './Home.css'

export function Home() {

  return (
    <div>
      <h1>Pagina Home</h1>
      <button onClick={() => {
        <Router>
          <Link to={'/cliente'} />
        </Router>
      }} >Pagina Cliente</button>
      <button onClick={() => { <Link to={'/funcionario'} /> }} >Pagina Funcionario</button>
      <button onClick={() => { <Link to={'/item_servico'} /> }} >Item servico</button>
      <button onClick={() => { <Link to={'/veiculo'} /> }} >Pagina Veículos</button>
    </div>
  )
}