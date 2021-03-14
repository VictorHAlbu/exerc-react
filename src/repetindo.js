import React from 'react';

// const luana = {
//     cliente: 'Luana',
//     idade: 27,
//     compras: [
//         { nome: 'Notebok', preco: 'R$ 2500' },
//         { nome: 'Geladeira', preco: 'R$ 3000' },
//         { nome: 'Smartphone', preco: 'R$ 1500' },
//     ],
//     ativa: true,
// };

// const mario = {
//     cliente: 'Mario',
//     idade: 31,
//     compras: [
//         { nome: 'Notebok', preco: 'R$ 2500' },
//         { nome: 'Geladeira', preco: 'R$ 3000' },
//         { nome: 'Smartphone', preco: 'R$ 1500' },
//         { nome: 'Guitarra', preco: 'R$ 3500' },
//     ],
//     ativa: false,
// };



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

// const livros = [
//     { nome: 'Baixa da égua', ano: 1996 },
//     { nome: 'Lagoa Azul', ano: 1998 },
//     { nome: 'Fim do Mundo', ano: 2000 },

// ];

const produtos = [
    {
        id: 1,
        nome: 'Smatphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
    },

];

//APP

const App = () => {
    const dados = produtos
        .filter(({ preco }) => Number(preco.replace('R$', '')) > 1500,
    );

    // const dados = mario;
    // const total = dados.compras
    //     .map((item) => Number(item.preco.replace('R$ ', ' ')))
    //     .reduce((a, b) => a + b);


    // const radom = Math.random();
    // const ativo = false;

    return (
        <>
            <section>
                {dados.map(({ id, nome, preco, cores }) => (
                    <div key={id}>
                        <h1>{nome}</h1>
                        <p>Preço:{preco}</p>

                        <ul>{cores.map((cor) =>
                            <li style={{ backgroundColor: cor, color: "white" }} key={cor}>
                                {cor}</li>
                        )}
                        </ul>
                    </div>
                ))}

            </section>


            {/* <ul>
                {livros.filter(({ ano }) => ano >= 1998)
                    .map(({ nome, ano }) => (
                        <li key={nome}>{nome}, {ano}</li>
                    ))}
            </ul> */}

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