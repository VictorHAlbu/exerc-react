import React from 'react';

const titulo = <h1>Esse é meu titulo</h1>;

function mostrarNome(sobrenome) {
    return 'Victor' + sobrenome;
}

const carro = {
    carro: 'Nivus',
    portas: 4,
}

const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'helvetica',
}

const App = () => {
    const radom = Math.random();
    const ativo = false;
    return (
        <>
            <h1 style={estiloH1}>Empresa</h1>
            {titulo}
            <p className={ativo ? 'ativo' : 'false'}>{radom * 100}</p>
            {mostrarNome('Albuquerque')}
            <p>{new Date().getFullYear()}</p>
            <p>{carro.carro}</p>
            <p>{carro.portas}</p>
            <p style={{ color: 'green' }}>Sempre aberta</p>
        </>
    );
};


export default App;