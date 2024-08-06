import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    ${props => props.theme.flexbox['center-column']}

    form{
        width: 16rem;

        ${props => props.theme.flexbox['center-column']}

        input{
            width: 90%;
            
            padding: 0.875rem;
            border: none;
            border-radius: 8px;

            background-color: ${props => props.theme['gray-100']};

            outline: none;

            &:focus{
                outline: 1px solid ${props => props.theme['green-400']};
            }
        }

        button{
            width: 100%;

            padding: 0.875rem;
            border: none;
            border-radius: 8px;

            cursor: pointer;

            &:hover{
                font-weight: bold;
                color: ${props => props.theme['gray-200']};
                background-color: ${props => props.theme['green-400']};
            }
        }
    }
`