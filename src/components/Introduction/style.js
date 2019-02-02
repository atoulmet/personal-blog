import styled from 'styled-components'

import { media } from '../Common/helpers'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px;
`

export const Text = styled.div`
    font-size: 40px;
    font-weight: 100;
    max-width: 900px;
    text-align: center;
    ${media.maxWidth.sm} {
        font-size: 30px;
    }
`
