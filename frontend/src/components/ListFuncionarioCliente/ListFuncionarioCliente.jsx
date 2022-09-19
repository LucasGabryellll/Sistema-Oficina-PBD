import React from 'react';
import { Table } from 'react-bootstrap';

import './ListFuncionarioCliente.css'

export function ListFuncionarioCliente({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.nome}</td>
        <td>{item?.cpf}</td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Lista de Funcionario que são clientes</h3>

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