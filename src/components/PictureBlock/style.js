import styled, { css } from 'styled-components'
import Image from 'gatsby-image'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
`

export const Picture = styled(Image)`
    border-radius: 50%;
    height: 110px;
    width: 110px;
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 24px
`

export const Subtitle = styled.div`
    font-size: 18px
`