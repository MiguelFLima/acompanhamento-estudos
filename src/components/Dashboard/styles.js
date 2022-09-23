import styled from "styled-components";


export const DashContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: column;
        width: full;
        
    }
`;

export const BlocosContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        width: full;
        
    }
`;

export const BlocoContainer = styled.div`
    width: 460px;
    height: 320px;
    color: white;
    border: 1px solid white;
    margin-inline: 140px;
    margin-top: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 1.5px 1.5px 15px black;
    background-color: rgb(30,30,30);

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
color: white;
width: 100vw;
text-align: center;
margin-top: 100px;

@media (max-width: 768px) {
    font-size: 2.3rem;
}
`;


 export const TituloBloco = styled.p`
    font-size: 3rem;
    color: white;
    margin-bottom: 0;

    @media (max-width: 768px) {
    font-size: 2rem;
}
 `;

 export const ConteudoBloco = styled.p`
    padding: 10px;
    font-size: 3rem;
    font-weight: bold;
    border-radius: 15px;
    border-bottom: 4px solid white;

    @media (max-width: 768px) {
    font-size: 2rem;
}
 `;

