import styled from "styled-components";

export const Body = styled.div`
    width: 100vw;
    height: calc(100vh - 120px);
    display: flex;
    justify-content: center;
    align-items: center; 
    background-repeat:no-repeat;
    background-position: cover;
    background-size: cover;
    background-image: url('https://planossaudeempresariais.net.br/wp-content/uploads/2019/02/fundo-saude-empresarial.png');
`;

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 120px);
`;

export const ContainerLogin = styled.div`
    width: 370px;
    height: 420px;
    border-radius: 10px;
    background-color: #016FB9;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Titulo = styled.h2`
    height: 40px;
    color: white;
    width: 87.5%;
    font-size: 2rem;
    margin-left: 2rem;
    margin-top: 16px;
    border-bottom: 2px solid white;
    align-self: flex-start;
`;

export const Input = styled.input `
    width: 300px;
    height: 40px;
    border-radius: 5px;
    align-self: flex-start;
    margin-left: 2rem;
    border: none;
    border-bottom: 1px solid white;
    margin-bottom: 30px;
    background-color: transparent;
    font-size: 1.2rem;
    color: white;
    ::placeholder {
        font-size: 18px;
        color: darkgray;
    }
    :focus {
        outline: 0;
    }

`;

export const Label = styled.label`
    color: white;
    align-self: flex-start;
    margin-left: 2rem;
    margin-bottom: 10px;
    font-size: 1.4rem;
    cursor: pointer;
`;

export const Botao = styled.button`
    width: 80%;
    height: 45px;
    font-size: 1.5rem;
    margin-top: 30px;
    align-self: center;
    background-color: #FFF;
    border: none;
    border-radius: 10px;
    transition: 0.2s;
    :hover {
        background-color: darkgray;
        cursor: pointer;

    }
`;

