import React from 'react';
import { Table } from 'react-bootstrap';

import '../../style/tableList.css'

export function ListClienteEspera({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.placa}</td>
        <td>{item?.nome}</td>
        <td>{item?.cpfcnpj}</td>
        <td>{item?.status}</td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Clientes em Espera</h3>

      <Table>
        <thead>
          <tr>
            <th>Veiculo</th>
            <th>nome</th>
            <th>cpfcnpj</th>
            <th>status</th>
          </tr>
        </thead>

        <tbody>
          <List />
        </tbody>
      </Table>
    </div>
  );
}