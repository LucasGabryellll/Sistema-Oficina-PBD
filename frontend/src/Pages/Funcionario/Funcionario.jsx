
import React, { useState, useEffect } from 'react';
import { ListAllFuncionario } from '../../components/ListAllFuncionarios/ListAllFuncionarios';

import { ListFuncionarioCliente } from '../../components/ListFuncionarioCliente/ListFuncionarioCliente';
import { ListFuncionarioSalarioAcima } from '../../components/ListFuncionarioSalarioAcima/ListFuncionarioSalarioAcima';
import api from '../../services/api';

import './Funcionario.css'

export function Funcionario() {
  const [funcionario, setFuncionario] = useState([{}]);
  const [funcionarioAcimaMedia, setFuncionarioAcimaMedia] = useState([{}]);
  const [allFuncionarios, setAllFuncionarios] = useState([{}]);

  const [tableFuncionario, setTable] = useState();

  async function getFuncionarioCliente() {
    const { data } = await api.get('funcionario/cliente');

    setFuncionario(data);
  }

  async function getFuncionarioSalarioAcimaMedia() {
    const { data } = await api.get('/funcionario/salario_acimaMedia');

    setFuncionarioAcimaMedia(data);
  }

  async function getAllFuncionarios() {
    const { data } = await api.get('/funcionarios');

    setAllFuncionarios(data);
  }

  useEffect(() => {

    getFuncionarioCliente();
  }, []);

  useEffect(() => {

    getFuncionarioSalarioAcimaMedia();
  }, []);

  useEffect(() => {
    getAllFuncionarios();
  }, [])

  function GetAllFuncionarios() {
    return (
      <div>
        {setTable(<ListAllFuncionario itens={allFuncionarios} />)}
      </div>
    )
  }

  function FuncionarioCliente() {
    return (
      <div>
        {setTable(<ListFuncionarioCliente itens={funcionario} />)}
      </div>
    )
  }

  function SalarioAcimaMedia() {
    return (
      <div>
        {setTable(<ListFuncionarioSalarioAcima itens={funcionarioAcimaMedia} />)}
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => GetAllFuncionarios()} >Lista de Funcionarios</button>
      <button onClick={() => FuncionarioCliente()} >Funcionario Cliente</button>
      <button onClick={() => SalarioAcimaMedia()} >Salario Acima media</button>

      <h1>Pagina do funcionario</h1>

      <div>
        {tableFuncionario}
      </div>

    </div>
  );
}