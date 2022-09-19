import React from 'react';
import { Table } from 'react-bootstrap';

import '../../style/tableList.css'

export function ListTempSer({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.nome}</td>
        <td>{item?.id}</td>
        <td>{item?.entrada}</td>
        <td>{item?.saida}</td>
        <td>{item?.tempo?.['days']}</td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Tempo de serviço</h3>

      <Table>
        <thead>
          <tr>
            <th>nome</th>
            <th>id</th>
            <th>entrada</th>
            <th>saida</th>
            <th>SLA</th>
          </tr>
        </thead>

        <tbody>
          <List />
        </tbody>
      </Table>
    </div>
  );
}