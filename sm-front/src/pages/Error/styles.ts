import styled from "styled-components";

export const ContainerError = styled.div`
    height: 99vh;
    width: 100%;

    ${props => props.theme.flexbox['center-column']}
    gap: none;

`

export const Erro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
        margin-top: -1rem;
    }
`
