import React from 'react';
import { Table } from 'react-bootstrap';

import './ListVeiculoModelo.css';

export function ListVeiculoModelo({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.modelo}</td>
        <td>{item?.quantidade}</td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Lista de Veiculos por Modelo</h3>

      <Table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Quantidade</th>
          </tr>
        </thead>

        <tbody>
          <List />
        </tbody>
      </Table>
    </div>
  );
}