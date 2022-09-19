import React from 'react';
import { Table } from 'react-bootstrap';

import './ListCliente.css';

export function ListCliente({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.nome}</td>
        <td>{item?.cpfcnpj}</td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Lista de Clientes</h3>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>cpf</th>
          </tr>
        </thead>

        <tbody>
          <List />
        </tbody>
      </Table>
    </div>
  );
}