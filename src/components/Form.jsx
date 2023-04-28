import { useEffect, useState } from "react";

import Error from "./Error";

import styled from "@emotion/styled";

import useSelectMonedas from "../hooks/useSelectMonedas";

import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        cursor: pointer;
        background-color: #7A7DFE;
    };
`;

const Form = ({setMonedas}) => {
    const [error, setError] = useState(false)
    const [criptos, setCriptos] = useState([]);
    const [SelectMonedas, moneda] = useSelectMonedas('Elige tu moneda', monedas);
    const [SelectCriptos, cripto] = useSelectMonedas('Elige tu cripto', criptos);

    useEffect(() => {
        const consultarApi = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                };
                return objeto;
            });
            setCriptos(arrayCriptos);            
        };
        consultarApi();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if([cripto, moneda].includes('')) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        };

        setMonedas({
            cripto,
            moneda,
        });
        
    };
 
    return (
        <>
            {error && 
                <Error>Todos los campos son obligatorios</Error>
            }

            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas/>
                <SelectCriptos/>
                <InputSubmit type="submit" value="Cotizar"/>
            </form>
        </>
        
    )
}

export default Form