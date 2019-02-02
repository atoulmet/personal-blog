import styled from 'styled-components'

import {colors} from '../Common'
import { media } from '../Common/helpers'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 30px;
    ${media.maxWidth.sm} {
        flex-direction: column;
        width: 100%;
    }
`

export const Image = styled.div`
    border-radius: 50%;
    height: 110px;
    width: 110px;
    background-image: url("${({picture}) => picture}");
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: 70%; 
    background-color: ${colors.yellow}
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    ${media.maxWidth.xs} {
        display: flex;
        justify-content: center;
    }
`

export const Wrapper = styled.div`
    padding-left: 30px;
    ${media.maxWidth.sm} {
        padding: 15px 30px;
        flex-direction: column;
        width: 100%;
        &:last-child {
            align-items: flex-start;
        }
    }
`

export const Description = styled.div`
`