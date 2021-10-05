import React from 'react'
import styled from 'styled-components';

const Titulo = styled.h1`
    font-size: 2rem;
    color: tomato;
`;

const Paragrafo = styled.p`
    font-size: 1.5rem;
    color: green;
`;

const ProdutoContainer = styled.div`
    display: flex;
`;

const Produto = styled.div`
    flex: 1;
`;

const Preco = styled.p`
    background-color: ${({cor}) => cor};
    color: white;
`;

const Preco2 = styled.p`
    background-color: hsl(${Math.random() * 360}, 100%, 50%);
`;

const Button = styled.button`
    background-color: ${({ativo}) => (ativo ? 'red' : 'blue')};
    color: white;
    &:hover {
        background-color: purple;
    }
`;

const ModuleStyledComponents1 = () => {

    const [ativo,setAtivo] = React.useState(true);

    return (
        <div>
            <ProdutoContainer>
                <Produto>
                    <Titulo>Notebook</Titulo>
                    <Paragrafo>Meu paragrafo</Paragrafo>
                    <Preco cor={"red"}>R$ 750.00</Preco>
                    <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>{ativo ? 'ATIVO' : 'INATIVO'}</Button>
                </Produto>
                <Produto>
                    <Titulo>Smartphone</Titulo>
                    <Paragrafo>Meu paragrafo</Paragrafo>
                    <Preco cor={"blue"}>R$ 750.00</Preco>
                    <Preco2>R$ 750.00</Preco2>
                </Produto>
            </ProdutoContainer>
            
        </div>
    )
}

export default ModuleStyledComponents1
