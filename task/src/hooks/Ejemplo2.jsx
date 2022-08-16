//ejemplos de:
//useState()
//useRef()
//useEffet()

import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Ejemplo2 = () => {

    //crear 2 conadores distintos cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //creamos una referencia con useRef para asociar una variable con un elemento de DOM del componente(vista HTML)

    const miRef = useRef();


    function incrementar1() {
        setContador1(contador1 + 1);
    }


    function incrementar2() {
        setContador2(contador2 + 1);
    }

    //trabajando conuseEfect

    //caso 1: ejecutar SIEMPRE un snipet de codigo
    //cada vez que haya in cambio en el estado edl componente se ejecuta aquello que este dentro del useEffect()

    // useEffect(() => {
    //   console.log('cambio en el estado del coponente');
    //   console.log('mostrar referencia a elemento del DOM');
    //   console.log(miRef);
  
    // })


    //caso 2: ejecutar solo cuando camie contado 1
    //ada vez que haya un cambio en l ontador 1 se ejecuta lo que diga el useEffect
    //en caso de que cambie el contado 2 no habra ejecucion

    // useEffect(() => {
    //   console.log('cambio en el estado del contador 1');
    //   console.log('mostrar referencia a elemento del DOM');
    //   console.log(miRef);
    // }, [contador1]);


    //caso 3: ejecutar solo cuando camie contado 1 o contaor 2
    //ada vez que haya un cambio en l ontador 1 se ejecuta lo que diga el useEffect
    //ada vez que haya un cambio en l ontador 2 se ejecuta lo que diga el useEffect
    
    useEffect(() => {

        console.log('cambio en el estado del coponente');
        console.log('mostrar referencia a elemento del DOM');
        console.log(miRef);
        }, [contador1, contador2]);
  
    

  return (
    <div>
        <h1> Ejemplo de useState(), useRef(), useEffect()</h1>
        <h2>CONTADOR 1: { contador1 }</h2>
        <h2>CONTADOR 2: { contador2 }</h2>
        {/**elemento referenciado */}
        <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
        {/**botones apara cambiar los contadores */}
        <div>
            <button onClick={incrementar1}>Incrementar ontador1</button>            
            <button onClick={incrementar2}>Incrementar ontador2</button>            

        </div>

    </div>
  );
}

export default Ejemplo2;
