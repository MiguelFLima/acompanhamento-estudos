import styled from "styled-components";

export const Container = styled.div`
    margin-top: 130px;
    width: 100%;
    display: flex; 
    flex-direction: column;
`;

export const Titulo = styled.h1`
    font-size: 2.8rem;
    color: white;
    width: 100%;
    text-align: center;
`;

export const ContainerTabela = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        overflow-x: auto;
    }

`;

export const Tabela = styled.table`
    width: 85vw;
    margin-top: 2rem;
`;

export const Thead = styled.thead`
    font-size: 2rem;
`;

export const LinhaTitulo = styled.tr`
    text-align: center;  
`;

export const Th = styled.th`
    color: aliceblue;
    font-size: 2rem;
    padding: 8px;
`;

export const TBody = styled.tbody`

`;

export const Linha = styled.tr`
    text-align: left;  
`;

export const Coluna = styled.td`
    color: white;
    font-size: 1.3rem;
    border-radius: 5px;
    padding: 15px;
`;

export const aLink = styled.a`
    text-decoration: none;
    color: white;
`;




    /* border-spacing: 0px 20px; */
    /* border-collapse: collapse; ==== pra tirar uma das bordas */
    /* border: 1px solid white; */
