import styled from "@emotion/styled"

const Resultados = styled.div`
  color: white;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Texto = styled.p`
  font-size: 20px;
  span {
    font-weight: 700;
  };
`;

const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  };
`;

const Imagen = styled.img`
  display: block;
  width: 150px;
  height: 150px;
`;

const Resultado = ({cotizacion}) => {
  const {
    CHANGEPCT24HOUR, 
    HIGHDAY, 
    LASTUPDATE,
    LOWDAY,
    PRICE,
    IMAGEURL,
  } = cotizacion;

  return (
    <Resultados>

      <div>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      </div>
      <div>
        <Precio>Precio: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
        <Texto>Porcentaje de subida/bajada: <span>{CHANGEPCT24HOUR}</span></Texto>
      </div>
    
      
      
    </Resultados>
  )
}

export default Resultado