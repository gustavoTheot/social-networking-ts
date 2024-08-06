import styled from "styled-components";

export const ContainerPost = styled.div`

    .date-post {
        span{
            font-size: 0.75rem;
            color: ${props => props.theme['blue-300']};
        }
    }

    .actions{
        display: flex;
        flex-direction: row;
        gap: 0.75rem;

        button{
            background-color: transparent;
            border: none;
            cursor: pointer;
            
            &:first-child{
                &:hover{
                    color: ${props => props.theme['red-normal']};
                }
            }

            &:last-child{
                &:hover{
                    color: ${props => props.theme['ocean']};
                }
            }
        }
    }
`