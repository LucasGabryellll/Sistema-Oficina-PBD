import React from 'react';
import { Table } from 'react-bootstrap';

import '../../style/tableList.css'

export function ListItemServico({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.peca}</td>
        <td>{item?.descricao_servico}</td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Lista de itens por serviço</h3>

      <Table>
        <thead>
          <tr>
            <th>Peça</th>
            <th>Descricao do Servico</th>
          </tr>
        </thead>

        <tbody>
          <List />
        </tbody>
      </Table>
    </div>
  );
}