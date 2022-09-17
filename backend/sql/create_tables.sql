create table if not exists usuario( 
    id serial primary key,
    login varchar(255) not null unique, 
    senha varchar(30) not null, 
    tipo varchar(30) not null
);

create table if not exists funcionario( 
    id serial primary key,
    id_usuario integer,
    nome varchar(255) not null, 
    cpf varchar(11) not null unique, 
    rg varchar(20) not null unique, 
    telefone varchar(11) not null,
    admissao date not null,
    salario decimal not null,
    especialidade varchar(50) not null, 
    foto varchar(255),
    foreign key(id_usuario) references usuario(id)
    );
    
create table if not exists servico( 
    id serial primary key,
    nome varchar(255) not null
);

create table if not exists endereco( 
    id serial primary key,
    logradouro varchar(255) not null,
    numero integer not null,
    cidade varchar(50) not null,
    estado varchar(50) not null,
    cep integer not null
);

create table if not exists cliente( 
    id serial primary key,
    nome varchar(255) not null,
    id_endereco integer,
    cpfCnpj varchar(255) not null unique,
    foreign key(id_endereco) references endereco(id)
);

create table if not exists veiculo( 
    id serial primary key,
    id_cliente integer,
    placa varchar(255) not null unique,
    marca varchar(50) not null,
    modelo varchar(50) not null,
    foreign key(id_cliente) references cliente(id)
);

create table if not exists fichaCliente( 
    id serial primary key,
    id_cliente integer,
    id_veiculo integer,
    tipoCliente varchar(50) not null,
    foreign key(id_cliente) references cliente(id),
    foreign key(id_veiculo) references veiculo(id)

);

create table if not exists historicoCliente( 
    id serial primary key,
    id_fichaCliente integer,
    entrada date not null,
    saida date not null,
    valor decimal not null,
    foreign key(id_fichaCliente ) references fichaCliente(id)
);

create table if not exists lojaConveniada( 
    id serial primary key,
    nome varchar(255) not null, 
    cnpj varchar(50) not null unique 
);

create table if not exists peca( 
    id serial primary key,
    nome varchar(255) not null, 
    valor decimal not null,
    id_lojaConveniada integer,
    foreign key(id_lojaConveniada) references lojaConveniada(id)
);

create table if not exists delivery( 
    id serial primary key,
    id_funcionario integer,
    id_cliente integer,
    horarioAgendado timestamp not null, 
    latitude varchar(10) not null, 
    longitude varchar(10) not null, 
    status varchar(20) not null, 
    foreign key(id_funcionario) references funcionario(id),
    foreign key(id_cliente) references cliente(id)
);

create table if not exists ordemServico( 
    id serial primary key,
    id_funcionario integer,
    id_cliente integer,
    id_veiculo integer,
    entrada timestamp not null,
    saida timestamp,
    status varchar(20) not null, 
    foreign key(id_funcionario) references funcionario(id),
    foreign key(id_cliente) references cliente(id),
    foreign key(id_veiculo) references veiculo(id)

);

create table if not exists servicosEmOrdem( 
    id serial primary key,
    id_servico integer,
    id_peca integer,
    id_responsavel integer,
    status varchar(20) not null, 
    valor decimal not null,
    foreign key(id_servico) references servico(id),
    foreign key(id_peca) references peca(id),
    foreign key(id_responsavel) references funcionario(id)
);

create table if not exists notaFiscalServico( 
    id serial primary key,
    id_cliente integer,
    id_ordemServico integer,
    id_servicosEmOrdem integer,
    valorTotal decimal not null,
    valorAvista decimal not null,
    valorAprazotrintadias decimal not null,
    valorAprazosessentadias decimal not null,
    foreign key(id_cliente) references cliente(id),
    foreign key(id_ordemServico) references ordemServico(id),
    foreign key(id_servicosEmOrdem) references servicosEmOrdem(id)
);

create table if not exists motoDaMecanica(
    id serial primary key,
    id_funcionario integer,
    foreign key(id_funcionario) references funcionario(id)
);