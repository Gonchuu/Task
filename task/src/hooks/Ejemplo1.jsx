// ejemplo de uso del hook useState

//crear un componente de tipo fnio y acceder a su estado privado a traves de u hooky admas poder modfcarlo

import React from 'react'
import { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;

    //valor inicial par una persona

    const personaInicial = {
        nombre: 'Gonza',
        email: 'gonza@gonza.com'
    }

    //queremos que el VALORINICIAL Y PERSONAINICIAL sean parte del estado del componente para asi poder gestionar su cambio y que éste se vea reflejado en la vista del componente

    //const [nombreVariable, funcionParaCambiar] = useState(valorInicial);
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    //creamos metodos para incrementar el contador y cambiar la persona

    //fncion para actualizar el estado privado que cntiene el contador
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    // funcion para actualizar el estado de persona en el componente
    function actualizarPersona () {
        setPersona (
            {
                nombre: 'pepe',
                email: 'pepe@pepe.com'
            }
        )
    }

    

    return (
        <div>
            <h1> Ejemplo de useState() </h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/**bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;