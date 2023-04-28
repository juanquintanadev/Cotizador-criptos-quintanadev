import { useState } from "react";

import styled from "@emotion/styled";

const Label = styled.label`
    color: white;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    margin: 15px 0;
    font-weight: 700;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 12px 10px;
    border-radius: 10px;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
`;

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('');

    const SelectMonedas = () => {
        return (
            <>
                <Label htmlFor="">{label}</Label>
                <Select 
                    value={state}
                    onChange={e => setState(e.target.value)}
                >
                    <option value="">Seleccione</option>
                    {opciones.map(opcion => (
                        <option
                            value={opcion.id}
                            key={opcion.id}
                        >{opcion.nombre}</option>
                    ))}  
                </Select>
            </>
        );
    };

    return [SelectMonedas, state];
};

export default useSelectMonedas;