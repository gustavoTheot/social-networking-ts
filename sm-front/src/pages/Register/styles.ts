import styled from "styled-components";

export const ContainerRegister = styled.div`
    height: 100vh;
    ${props => props.theme.flexbox['center-column']}


    form{
        width: 16rem;
        ${props => props.theme.flexbox['center-column']}

        input{
            ${props => props.theme.form_default.input['input-form']}
            width: 90%;
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