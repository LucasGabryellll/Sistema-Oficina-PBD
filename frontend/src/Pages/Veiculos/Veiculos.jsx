
import React, { useState, useEffect } from 'react';
import { ListVeiculoMarca } from '../../components/ListVeiculoMarca/ListVeiculoMarca';
import { ListVeiculoModelo } from '../../components/ListVeiculoModelo/ListVeiculoModelo';

import api from '../../services/api';

export function Veiculos() {
  const [veiculo, setVeiculo] = useState([{}]);
  const [veiculoMarca, setVeiculoMarca] = useState([{}]);

  const [tableVeiculos, setTableVeiculos] = useState();

  async function getVeiculoModelo() {
    const { data } = await api.get('/veiculo/modelo');

    setVeiculo(data);
  }

  async function getVeiculoMarca() {
    const { data } = await api.get('/veiculo/marca');

    setVeiculoMarca(data);
  }

  useEffect(() => {
    getVeiculoModelo();

  }, []);

  useEffect(() => {
    getVeiculoMarca();

  }, []);

  function VeiculoModelo() {
    return (
      <div>
        {setTableVeiculos(<ListVeiculoModelo itens={veiculo} />)}
      </div>
    )
  }

  function VeiculoMarca() {
    return (
      <div>
        {setTableVeiculos(<ListVeiculoMarca itens={veiculoMarca} />)}
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => VeiculoModelo()} >Veiculos por modelo</button>
      <button onClick={() => VeiculoMarca()} >Veiculos por marca</button>

      <h1>Pagina dos Veiculos</h1>

      <div>
        {tableVeiculos}
      </div>

    </div>
  );
}