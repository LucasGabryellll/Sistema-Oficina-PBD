
INSERT INTO usuario (login, senha, tipo)
VALUES ('Marcelo','marcelo123','chefe');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (1, 'Marcelo', '12345678910', '1234567', '87999999999', '2015-09-17', 6460, 'gerente', 'https://cdn.pixabay.com/photo/2019/07/13/11/45/black-professional-4334648_960_720.jpg');

INSERT INTO usuario (login, senha, tipo)
VALUES ('Maria','maria123','secretária');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (2, 'Maria', '12345678911', '1234568', '87999999998', '2021-09-17', 1292.50, 'secretária', ‘https://cdn.pixabay.com/photo/2022/05/05/01/13/woman-7175038_960_720.jpg’);

INSERT INTO usuario (login, senha, tipo)
VALUES ('Andréia','andreia123','atendente');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (3, 'Andréia', '12345678912', '1234569', '87999999997', '2021-04-17', 1592.40, 'atendente',’https://cdn.pixabay.com/photo/2015/07/31/00/36/woman-868534_960_720.jpg’);

INSERT INTO usuario (login, senha, tipo)
VALUES ('José','jose123','tesoureiro');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (4, 'José', '12345678913', '2234569', '87999999967', '2020-03-17', 2592.40, 'tesoureiro', 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg');

INSERT INTO usuario (login, senha, tipo)
VALUES ('Paulo','paulo123','coordenador');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (5, 'Paulo', '12345678914', '2274568', '87999999567', '2020-06-17', 2792.40, 'coordenador', 'https://cdn.pixabay.com/photo/2019/03/17/12/57/phone-4060860_960_720.jpg');

INSERT INTO usuario (login, senha, tipo)
VALUES ('Ricardo','ricardo123','mecanico');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (6, 'Ricardo', '12345698914', '2234568', '87999999567', '2020-01-17', 1792.40, 'mecanico', 'https://cdn.pixabay.com/photo/2015/12/07/11/01/building-1080597_960_720.jpg');

INSERT INTO usuario (login, senha, tipo)
VALUES ('Felipe','felipe123','mecanico');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (7, 'Felipe', '12345678915', '2237568', '87999999567', '2020-08-11', 1792.40, 'mecanico', 'https://cdn.pixabay.com/photo/2018/09/20/22/23/auto-repair-3691962_960_720.jpg');

INSERT INTO usuario (login, senha, tipo)
VALUES ('Breno','breno123','motoqueiro');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (8, 'Breno', '1234569784', '2234598', '87981999567', '2020-07-17', 1295.40, 'motoqueiro', 'https://cdn.pixabay.com/photo/2016/10/07/02/18/motorbike-1720531_960_720.jpg’);

INSERT INTO usuario (login, senha, tipo)
VALUES ('Juliana','juliana123','motoqueiro');

INSERT INTO funcionario(id_usuario, nome, cpf, rg, telefone, admissao, salario, especialidade, foto)
VALUES (9, 'Juliana', '12349478915', '2297568', '87991399567', '2020-10-11', 1294.40, 'motoqueiro', 'https://cdn.pixabay.com/photo/2022/04/19/15/31/woman-7143215_960_720.jpg');

INSERT INTO endereco (id,logradouro,numero,cidade,estado,cep)
VALUES (1,'AABB',123,'alto','PB',234567);

INSERT INTO endereco (id,logradouro,numero,cidade,estado,cep)
VALUES (2,'Rua da Carroça',2,'Cidade Z','PE',58923450);

INSERT INTO  endereco (id,logradouro,numero,cidade,estado,cep)
VALUES (3,'Rua do Autrónomo',2,'Cidade Z','PE',58923460);

INSERT INTO endereco (id,logradouro , numero , cidade, estado, cep)
VALUES (4,'Rua da Amizade',2,'Cidade Z','PE',58923460);

INSERT INTO endereco (id,logradouro , numero , cidade, estado, cep)
VALUES (5,'Rua do Autrónomo',5,'Cidade Z', 'PE', 58923480);

INSERT INTO endereco (id,logradouro , numero , cidade, estado, cep)
VALUES (6,'Rua do Autrónomo',9,'Cidade Z', 'PE', 58923490);

INSERT INTO endereco (id,logradouro , numero , cidade, estado, cep)
VALUES (7,'Rua da Amizade',24,'Cidade Z', 'Pernambuco', 58923470);

INSERT INTO servico (id, nome)
VALUES (501,'Desmontar o carburador');

INSERT INTO servico (id, nome)
VALUES (502,'Verificar o problema no Carburador');

INSERT INTO servico (id, nome)
VALUES (503,'Substituir peças na carburador');
INSERT INTO servico (id, nome)
VALUES (504,'Encher pneu');

INSERT INTO servico (id, nome)
VALUES (505,'Trocar pneu');

INSERT INTO servico (id, nome)
VALUES (506,'Trocar óleo do motor');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (1,'Ana',1,'11111111111');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (2,'Andreia',2,'12345678912');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (3,'Maria',3,'12345678911');
INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (4,'Marcelo',5,'12345678910');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (5,'Rosa',6,'12345678122');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (6,'Rubens Barri e Quebra',3,'22222222222');
INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (7,'Samuel',1,'33333333333');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (8,'Hanna',2,'44444444444');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (9,'Jamerson',3,'55555555555');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (10,'Guilherme',4,'66666666666');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (11,'Raquel',5,'77777777777');

INSERT INTO cliente (id,nome,id_endereco,cpfcnpj)
VALUES (12,'Branca',6,'88888888888');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (1,6,'ABS-1978',’Fiat’,’Uno’);

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (2,1,'JHC-2000','Chevrolet','Equinox');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (3,3,'ZSD-1256','Chevrolet','Equinox');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (4,2,'RFK-0957','Land Rover','Range Rover Velar');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (5,4,'WQT-5789','Hyundai','Azera');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (6,5,'HDJ-5478','Jeep','Renegade');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (7,7,'GHT-6579','Fiat','Cronos');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (8,8,'TAU-9057','Fiat','Cronos');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (9,9,'GHT-3245','Audi','A4');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (10,10,'AFJ-8576','Audi','A4');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (11,11,'ADK-2314','Audi','A3');

INSERT INTO veiculo(id,id_cliente,placa,marca,modelo)
VALUES (12,12,'AOU-4654','Audi','A4');

INSERT INTO lojaconveniada (id,nome,cnpj)
VALUES (1,'Pit Shop', '11.111.111/0001-11');

INSERT INTO lojaconveniada (id,nome,cnpj)
VALUES (2,'Auto Peças', '22.222.222/0001-22');

INSERT INTO lojaconveniada (id,nome,cnpj)
VALUES (3,'Auto Help', '33.333.333/0001-33');

INSERT INTO peca (id,nome,valor,id_lojaconveniada)
VALUES (1,'Velas de ignição',50,1);

INSERT INTO peca (id,nome,valor,id_lojaconveniada)
VALUES (2,'Junta de Cabeçote',70,2);

INSERT INTO peca (id,nome,valor,id_lojaconveniada)
VALUES (3,'Amortecedor Dianteiro',110,3);

INSERT INTO peca (id,nome,valor,id_lojaconveniada)
VALUES (4,'Amortecedor Traseiro',170,3);

INSERT INTO peca (id,nome,valor,id_lojaconveniada)
VALUES (5,'carburador',119,3);

INSERT INTO peca (id,nome,valor,id_lojaconveniada)
VALUES (6,’pneu’,80,3);

INSERT INTO servicosemordem (id,id_servico,id_peca,id_responsavel, status, valor) VALUES (1, 503, 5, 3, 'Não Realizado', 200);

INSERT INTO servicosemordem (id,id_servico,id_peca,id_responsavel, status, valor)
VALUES (2, 505, 6, 3, 'Não Realizado', 50);

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, saida, status)
VALUES (7,1,2,'17/02/2022','18/02/2022', 'concluido');
INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, status)
VALUES (7,1,2,'17/09/2022', 'não concluido');

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, saida, status)
VALUES (6,2,4,'18/03/2022','19/03/2022', 'concluido');

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, saida, status)
VALUES (7,6,1,'15/09/2022','16/09/2022', 'concluido'); 

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, status)
VALUES (7,4,5,'15/09/2022', 'não concluido');

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, saida, status)
VALUES (6,5,6,'13/09/2022','15/09/2022', 'concluido');

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, saida, status)
VALUES (7,7,7,'14/09/2022','16/09/2022', 'concluido');

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, saida, status)
VALUES (6,8,8,'17/09/2022','17/09/2022', 'concluido');

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, status)
VALUES (6,9,9,'17/09/2022', 'não concluido');

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, saida, status)
VALUES (7,10,10,'12/09/2022','13/09/2022', 'concluido');

INSERT INTO ordemservico (id_funcionario,id_cliente,id_veiculo, entrada, saida, status)
VALUES (7,11,11,'30/08/2022','30/08/2022', 'concluido');

insert into notafiscalservico(id, id_cliente, id_ordemservico, id_servicosemordem, valortotal, valoravista, valoraprazotrintadias, valoraprazosessentadias, status)
values(1, 1, 1, 1, 250, 200, 270, 300, 'P');

INSERT INTO notafiscalservico(id, id_cliente, id_ordemservico, id_servicosemordem, valortotal, valoravista, valoraprazotrintadias, valoraprazosessentadias, status)
values(1, 1, 1, 1, 250, 200, 270, 300, 'P');

INSERT INTO notafiscalservico(id, id_cliente, id_ordemservico, id_servicosemordem, valortotal, valoravista, valoraprazotrintadias, valoraprazosessentadias, status)
values(7, 3, 1, 1, 250, 200, 270, 300, 'P');

INSERT INTO notafiscalservico(id, id_cliente, id_ordemservico, id_servicosemordem, valortotal, valoravista, valoraprazotrintadias, valoraprazosessentadias, status)
values(4, 4, 2, 2, 250, 200, 270, 300, 'D');

INSERT INTO notafiscalservico(id, id_cliente, id_ordemservico, id_servicosemordem, valortotal, valoravista, valoraprazotrintadias, valoraprazosessentadias, status)
values(5, 2, 1, 2, 250, 200, 270, 300, 'D');
