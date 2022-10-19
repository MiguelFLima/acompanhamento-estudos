import styled from "styled-components";

export const DashContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: column;
        width: full;
        height: auto;
        
    }
`;

export const BlocosContainerMaiores = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        width: full;
        height: auto;
    }
`;

export const BlocoContainer = styled.div`
    width: 400px;
    height: 180px;
    background-color: var(--corTerciaria) ;
    border: 1px solid var(--corSecundaria);
    margin-inline: 140px;
    margin-top: 0px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 2px 2px 5px var(--corBranco);

    @media (max-width: 768px) {
        width: 200px;
        height: 220px;
        text-align: center;
        margin: 0;
        margin-top: 72px;
    }
`;

export const TituloDash = styled.h1`
    font-size: 3rem;
    color: var(--corBranco);
    letter-spacing: 8px;
    width: 100%;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 0;

    @media (max-width: 768px) {
        font-size: 2.3rem;
        margin-top: 15px;
    }
`;


 export const TituloBloco = styled.p`
    font-size: 2.4rem;
    color: var(--corPrincipal);
    margin: 0;

    @media (max-width: 768px) {
    font-size: 2rem;
}
 `;

 export const ConteudoBloco = styled.p`
    padding: 10px;
    font-size: 3rem;
    font-weight: bold;
    border-radius: 15px;
    border-bottom: 4px solid var(--corSexta);
    margin: 0;

    @media (max-width: 768px) {
    font-size: 2rem;
}
 `;





// Novo Dash


export const BlocosContainerMenores = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -30px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: full;
        max-width: 400px;
        height: auto;
        margin-top: 120px;
    }
`;

export const BlocoMenor = styled.div`
    width: 280px;
    height: 200px;
    border: 1px solid black;
    margin-inline: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--corTerciaria);
    box-shadow: 2px 2px 5px var(--corBranco);
    border-radius: 15px;

    @media (max-width: 768px) {
        margin-inline: 20px;
        width: 240px;
        
    }
`;

export const TituloBlocoMenor = styled.p`
    font-size: 1.6rem;
    color: var(--corPrincipal);
    text-align: center;
    margin-bottom: 2px;
    line-height: 35px;

    @media (max-width: 768px) {
    font-size: 2rem;
}
 `;

export const ConteudoBlocoMenor = styled.p`
    font-size: 2rem;
    color: var(--corSexta);
    font-weight: bold;
    margin-top: 14px;
    border-radius: 15px;
    width: 25%;
    text-align: center;
    border-bottom: 2px solid var(--corSexta);
    padding-bottom: 6px;

    @media (max-width: 768px) {
    font-size: 1.5rem;
    }
`;

