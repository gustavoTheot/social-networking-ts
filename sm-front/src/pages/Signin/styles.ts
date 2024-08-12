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
            ${props => props.theme.form_default.input['input-form']}
        }

        button{
            ${props => props.theme.form_default.button['button-form']}
        }

        .new-acount{
            a{
                text-decoration: none;
                color: ${props => props.theme['green-500']};

                &:hover{
                    color: ${props => props.theme['green-100']};
                }
            }
        }
    }
`