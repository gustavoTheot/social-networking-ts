import styled from "styled-components";

export const FeedContainer = styled.div`
    ${props => props.theme.flexbox['center-column']}
    margin: 0 auto;
    width: 40rem;

`
export const NewPost = styled.div``

export const Feed = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

   
`

export const Content = styled.div`
    header{
        ${props => props.theme.flexbox['start-center-row']}
    }

    ${props => props.theme.flexbox['center-start-column']}

    img {
        border-radius: 999px;
        width: 2rem;
        height: 2rem;
}
`

