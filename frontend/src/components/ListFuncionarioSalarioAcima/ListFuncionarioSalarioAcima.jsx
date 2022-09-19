import React from 'react';
import { Table } from 'react-bootstrap';

import './ListFuncionarioSalarioAcima.css';

export function ListFuncionarioSalarioAcima({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.nome}</td>
        <td>{item?.salario}</td>
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
            <th>salario</th>
          </tr>
        </thead>

        <tbody>
          <List />
        </tbody>
      </Table>
    </div>
  );
}