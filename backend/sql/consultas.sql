select * from funcionario

select f.nome, f.cpf from funcionario f, cliente c where cpf = c.cpfcnpj

select sum(salario)/count(*) from funcionario

select nome, salario from funcionario where salario>=(select sum(salario)/count(*) from funcionario) and admissao >= '2020-01-01'

select marca,count(marca) as quantidadeA, modelo, count(modelo) as quantidadeB from veiculo group by marca, modelo order by quantidadeA, quantidadeB desc

select so.id, s.nome, pc.nome from servicosemordem so, servico s, peca pc where id_servico = s.id and id_peca = pc.id

select c.nome, o.id, entrada, o.saida, o.saida-o.entrada as tempo from ordemservico o, cliente c where o.id = c.id

select v.placa, c.nome, c.cpfcnpj, o.status from veiculo v, cliente c, ordemservico o where  o.status = 'não concluido' and v.id_cliente = c.id and o.id_cliente = c.id

select f.nome, so.id_funcionario, c.placa, so.id as id_servico
from funcionario f, ordemservico so, veiculo c 
where f.id = so.id_funcionario and c.id_cliente = so.id_cliente

select c.nome, nf.status, sum(nf.valortotal) as valortotaldevido
from cliente c, notafiscalservico nf
where status = 'D' and c.id = nf.id_cliente
group by nome, status
order by nome, status, valortotaldevido desc

select salario, Count(salario) from funcionario group by salario having Count(salario)>1
