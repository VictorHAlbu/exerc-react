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



// const titulo = <h1>Esse é meu titulo</h1>;

// function mostrarNome(sobrenome) {
//     return 'Victor' + sobrenome;
// }

// const carro = {
//     carro: 'Nivus',
//     portas: 4,
// }

// const estiloH1 = {
//     color: 'blue',
//     fontSize: '20px',
//     fontFamily: 'helvetica',
// }

const livros = [
    { nome: 'Baixa da égua', ano: 1996 },
    { nome: 'Lagoa Azul', ano: 1998 },
    { nome: 'Fim do Mundo', ano: 2000 },

];

//APP

const App = () => {
    // const dados = mario;
    // const total = dados.compras
    //     .map((item) => Number(item.preco.replace('R$ ', ' ')))
    //     .reduce((a, b) => a + b);


    // const radom = Math.random();
    // const ativo = false;

    return (
        <>
            <ul>
                {livros.filter(({ ano }) => ano >= 1998)
                    .map(({ nome, ano }) => (
                        <li key={nome}>{nome}, {ano}</li>
                    ))}
            </ul>



            {/* <p>Nome:{dados.cliente}</p>
            <p>Preço: {dados.idade}</p>
            <p>
                <span style={{ color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
            </p>

            <p>Total: {total}</p>
            <p>{total > 10000 && 'Gasto ultrapassado'}</p>
 */}

            {/* <h1 style={estiloH1}>Empresa</h1>
            {titulo}
            <p className={ativo ? 'ativo' : 'false'}>{radom * 100}</p>
            {mostrarNome('Albuquerque')}
            <p>{new Date().getFullYear()}</p>
            <p>{carro.carro}</p>
            <p>{carro.portas}</p>
            <p style={{ color: 'green' }}>Sempre aberta</p> */}
        </>
    );
};


export default App;