import React, { useState, useEffect } from 'react';

import { ListCliente } from '../../components/ListCliente/ListCliente';
import { ListClienteEspera } from '../../components/ListClienteEspera/ListClienteEspera';
import { ListTempSer } from '../../components/ListTempoSer/ListTempoSer';

import api from '../../services/api';
import './Cliente.css'

export function Cliente() {
  const [clientes, setClientes] = useState([{}]);
  const [tempoServico, setTempoServico] = useState([{}]);
  const [clienteEspera, setClienteEspera] = useState([{}]);

  const [tableFuncionario, setTable] = useState();


  async function getAllClientes() {
    const { data } = await api.get('/clientes');

    setClientes(data);
  };

  async function getTempoServico() {
    const { data } = await api.get('/cliente/tempo_servico');

    setTempoServico(data);
  };

  async function getClientEspera() {
    const { data } = await api.get('/cliente/clientes_nao_atendidos');

    setClienteEspera(data);
  };
  
  useEffect(() => {

    getAllClientes();
  }, []);
    
  useEffect(() => {

    getTempoServico();
  }, []);

  useEffect(() => {

    getClientEspera();
  }, []);

  function get_AllClientes() {
    return (
      <div>
        {setTable(<ListCliente itens={clientes} />)}
      </div>
    )
  }

  function get_TempoServico() {
    return (
      <div>
        {setTable(<ListTempSer itens={tempoServico} />)}
      </div>
    )
  }

  
  function get_ClienteEspera() {
    return (
      <div>
        {setTable(<ListClienteEspera itens={clienteEspera} />)}
      </div>
    )
  }


  return (
    <div>
      <h1>Pagina do cliente</h1>

      <button onClick={() => get_AllClientes()} >Lista de Clientes</button>
      <button onClick={() => get_TempoServico()} >Tempo de serviço</button>
      <button onClick={() => get_ClienteEspera()} >Cliente em espera</button>

      <div>
        {tableFuncionario}
      </div>
    </div>
  );
}