import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';



const App = () => {
  const [modal, setModal] = React.useState(false);

  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Victor', idade: '28' })

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Ciência da computação' });
  }

  return (
    <>
      <div>{modal ? ' Modal aberto' : 'Modal fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />

      <div>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>

        <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      </div>
    </>
  );
};

export default App;
