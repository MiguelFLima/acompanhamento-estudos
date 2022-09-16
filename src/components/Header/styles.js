import styled from "styled-components";



export const Container = styled.div`
    width: 100vw;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0E1116;
`;

export const Titulo = styled.h1`
    font-size: 3.2rem;
    color: white;
    text-align: center;
    margin-left: 2%;
`;

export const ProfilePic = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

export const ProfilePicNotLogged = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 3rem;
`;

export const signOutContainer = styled.div`
    width: 200px;
    margin-right: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const signOut = styled.button`
    width: 70px;
    height: 30px;
    font-size: 1.2rem;
    color: white;
    margin-right: 1.7rem;
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
`;

