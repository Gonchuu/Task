//componente que va a contener un formulario para autenticacion e3 usuarios

import React, { useState } from 'react';

const Loginform = () => {
    const initialCredentials = [{
        user: '' ,
        password: '',
    }
];

const [credentials, setCredentials] = useState(initialCredentials);

return (
    <div>

    </div>
);
}

export default Loginform;