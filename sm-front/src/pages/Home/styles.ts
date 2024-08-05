import styled from "styled-components";

export const FeedContainer = styled.ul`
    ${props => props.theme.flexbox['center-row']}

`

export const Feed = styled.div`
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
