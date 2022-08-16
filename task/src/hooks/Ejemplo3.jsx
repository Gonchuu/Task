// ejemplo hooks de useState y useContext

import React from 'react'
import { useState, useContext } from 'react'


const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);


return (
  <div>
    <h1>
      el token es: {state.token}
    </h1>
    <Componente2></Componente2>
  </div>
);

}

const Componente2 = () => {
  const state = useContext(miContexto);


return (
  <div>
    <h1>
      la sesion es: {state.sesion}
    </h1>
  </div>
);

}

export default function MiComponenteConContexto () {
  const estadoInicial = {
    token: '1234567',
    sesion: 1
  }

  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion () {
    setSessionData (
      {
        token:'JWT123456789',
        sesion: sessionData.sesion + 1
      }
    );
  }

  return (
  <miContexto.Provider value = { sessionData}>
    <h1>Ejemplo useState y seContex</h1>
    <Componente1></Componente1>
    <button onClick = { actualizarSesion }>Actualizar sesion</button>
  </miContexto.Provider>
  )
}

