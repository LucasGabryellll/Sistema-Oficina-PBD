import React from 'react';
import { Table } from 'react-bootstrap';

import './ListVeiculoMarca.css';

export function ListVeiculoMarca({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.marca}</td>
        <td>{item?.quantidade}</td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Lista de Veiculos por Marca</h3>

      <Table>
        <thead>
          <tr>
            <th>Marca</th>
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