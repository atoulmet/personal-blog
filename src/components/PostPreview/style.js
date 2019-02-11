import styled from 'styled-components'
import { Link } from "gatsby"

import {colors} from '../Common'
import {media} from '../Common/helpers'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media.maxWidth.md} {
        margin: 15px 30px 0px 30px;
        max-width: 100%;
    }
`

//Modifer pour avoir width proportionnelle
export const Content = styled.div`
    max-width: 700px;
    padding-top: 15px;
    padding-bottom: 30px;
    span {
        width: 0%;
        &:hover {
            transition-duration: 0.3s;
            width: 30%;
        }
    }
    ${media.maxWidth.md} {
        max-width: 100%;
    }
`

export const StyledLink = styled(Link)`
    font-weight: 600;
    font-size: 24px;
    color: ${colors.black};
    box-shadow: none;
    ${media.maxWidth.md} {
        white-space: initial;
    }
`

export const PostDescription = styled.div`
    margin-top: 15px;
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
    background: url("${props => props.url}") center no-repeat;
    background-size: cover;
    width: 100%;
    height: 200px;
    border-radius: 5px;
`

export const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: ${colors.grey};
`
