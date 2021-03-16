import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';

const App = () => {
    function handleClick(event) {
        console.log(event.target);
    }

    return (<div>
        <Header>

        </Header>

        <Form />

        <button onClick={handleClick} onMouseMove={handleClick}>
            Clique
        </button>
        <br />

        <Footer />

    </div >
    );

};

export default App;