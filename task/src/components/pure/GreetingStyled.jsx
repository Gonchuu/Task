//definir stilos a traves de constantes

import React, { useState } from 'react';

//estilo para usuario logueado

const loggedStyled = {
    color: 'green'
};

//estilo para usuario no logueado

const unloggedStyled = {
    color: 'tomato',
    fontWeight: 'bold'
};

const GreetingStyled = (props) => {
//generamos un estado para el componente y asi controlar si el usario esta o no logueado

    const [logged, setLogged] = useState(false)

    return (
        <div style = { logged ? loggedStyled : unloggedStyled}>
            { logged ? (<p>Hola, { props.name} </p>) : (<p> Please login</p>)}
            <button on onClick={() => {
                console.log('Boton pulado');
                setLogged(!logged);
                }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;