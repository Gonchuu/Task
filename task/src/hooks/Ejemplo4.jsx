import React from "react";

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>
                Ejemplo de childen props
            </h1>
            <h2>
                NOMBRE: {props.nombre}
            </h2>

            {props.children}
        </div>
    )
}

export default Ejemplo4;