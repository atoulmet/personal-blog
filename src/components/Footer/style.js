import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    padding: 60px 0;
`

export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 30px;
`

export const SocialItem = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin: 0 15px;
    &:hover {
        transition-duration: 0.2s;
        background-color: ${({localeColor}) => localeColor};
    }
`

export const StyledLink = styled.a`
    box-shadow: none;
`
