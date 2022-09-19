import React, { useState, useEffect } from 'react';
import { ListItemServico } from '../../components/ListItemServico/ListItemServico';
import api from '../../services/api';

export function ItemServico() {
  const [itemServico, setItemServico] = useState([{}]);

  //const [tableVeiculos, setTableVeiculos] = useState();

  async function getItemServico() {
    const { data } = await api.get('/servico/peca');
    setItemServico(data);
  }

  useEffect(() => {
    getItemServico();

  }, []);

  return (
    <div>
      <h1>Pagina dos Serviços</h1>

      <div>
        <ListItemServico itens={itemServico} />
      </div>

    </div>
  );
}