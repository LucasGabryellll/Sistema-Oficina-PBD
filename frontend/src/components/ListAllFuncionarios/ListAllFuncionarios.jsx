import React from 'react';
import { Table } from 'react-bootstrap';

import './ListAllFuncionario.css';

export function ListAllFuncionario({ itens }) {

  const List = () => itens.map((item) => {
    return (
      <tr key={item.id} >
        <td>{item?.id}</td>
        <td>{item?.id_usuario}</td>
        <td>{item?.nome}</td>
        <td>{item?.cpf}</td>
        <td>{item?.rg}</td>
        <td>{item?.telefone}</td>
        <td>{item?.admissao}</td>
        <td>{item?.salario}</td>
        <td>{item?.especialidade}</td>
        <td>{item?.foto}</td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Lista de Funcionarios</h3>

      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>id_usuario</th>
            <th>Nome</th>
            <th>cpf</th>
            <th>rg</th>
            <th>telefone</th>
            <th>admissao</th>
            <th>salario</th>
            <th>especialidade</th>
            <th>foto</th>
          </tr>
        </thead>

        <tbody>
          <List />
        </tbody>
      </Table>
    </div>
  );
}