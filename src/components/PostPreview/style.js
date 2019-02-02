import styled from 'styled-components'
import { Link } from "gatsby"

import {colors} from '../Common'
import {media} from '../Common/helpers'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media.maxWidth.md} {
        padding: 15px 30px 0px 30px;
    }
`

//Modifer pour avoir width proportionnelle
export const Content = styled.div`
    max-width: 900px;
    padding-top: 15px;
    padding-bottom: 30px;
    span {
        width: 0%;
        &:hover {
            transition-duration: 0.3s;
            width: 30%;
        }
    }
`

export const Title = styled(Link)`
    font-weight: 600;
    font-size: 24px;
    color: ${colors.black};
    box-shadow: none;
`

export const Date = styled.p`
    padding-right: 5px;
    margin-bottom: 0px;
`

export const Text = styled.p`
    margin-bottom: 0px;
`

export const Duration = styled.p`
    padding-left: 5px;
    margin-bottom: 0px;
`

export const Cover = styled.div`
    background-image: url("${props => props.url}");
    width: 100%;
    height: 200px;
    border-radius: 5px;
`

export const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: ${colors.grey};
`
