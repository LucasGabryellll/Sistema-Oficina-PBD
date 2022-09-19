import { useState } from 'react';
import './Login.css'

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginInput = () => {
    
  }

  const handleLogin = () => {
    return () => { }
  }

  return (
    <div>
      <h1>Página de login</h1>

      <input
        type="text"
        value={login}
        placeholder="Digite seu login"
        onChange={e => setLogin(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Digite sua senha"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={() => { }} >Entre</button>
    </div>
  );
}