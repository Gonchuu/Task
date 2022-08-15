import React, { useState } from 'react'
import Child from '../pure/Child';

//el padre internamente va a pintar al hijo

const Father = () => {

    const [name, setName] = useState('Gonza')

//definimos un metodo, es una funcion que va a recibir un texto y una alerta

    function showMessage (text) {
        alert(`Message recived: ${text}`)
    }

    function updateName(newName) {
        setName(newName)
    }

  return (
    <div style={{background: 'tomato', padding: '10px'}}>
        <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}

export default Father;