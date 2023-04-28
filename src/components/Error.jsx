import styled from "@emotion/styled"

const Texto = styled.div`
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    background-color: #B7322C;
    padding: 15px;
    font-family: 'Lato', sans-serif; 

`;

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error