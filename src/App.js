import React from 'react';

const App = () => {
  const radom = Math.random();

  function mostraNome(sobrenome) {
    return 'Victor ' + sobrenome;
  }

  const carro = {
    nome: 'Astra',
    rodas: '4',
  };

  const estiloP = {
    color: "blue",
    fontSize: '2rem',

  }

  return (
    <>
      <p>{radom * 100}</p>
      <p>{true ? 'auuu' : 'auwaa'}- {10}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p>{carro.nome}</p>
      <p>{carro.rodas}</p>
      {mostraNome('Albuquerque')}
    </>
  );
};


export default App;