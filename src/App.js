import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebok', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebok', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {

  const livros = [
    { nome: 'Baixa da égua', ano: 1996 },
    { nome: 'Lagoa Azul', ano: 1998 },
    { nome: 'Fim do Mundo', ano: 2000 },

  ];

  const dados = luana;
  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$', '')))
    .reduce((a, b) => a + b);

  return (
    <div>

      <ul>
        {livros
          .filter(({ ano }) => ano >= 1998)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome}, {ano}
            </li>
          ))}
      </ul>

      <p>Nome: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>
      <p>
        Situação: {' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
      </p>
      <p>Total: {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  )
};


export default App;