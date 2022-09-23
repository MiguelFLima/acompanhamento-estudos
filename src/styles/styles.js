import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    
    @media (max-width: 768px) {
        width: 300px;
        overflow-x: auto;
    }
`;