import styled from 'styled-components'
import { Link } from 'gatsby'

import {colors} from '../../components/Common'
import { media } from '../../components/Common/helpers'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    ${media.maxWidth.lg} {
        padding: 60px 30px;
    }
`
export const Content = styled.div`
    max-width: 900px;
`

export const Image = styled.div`
    background-image: url("${({picture}) => picture}");
    width: 100%;
    height: 200px;
    border-radius: 5px;
`

export const Title = styled.h1`
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
`

export const Date = styled.p`
    color: ${colors.grey};
    margin-bottom: 15px;
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${({alignRight}) => alignRight ? 'flex-end': 'space-between'};
`

export const NavLink = styled(Link)`
    color: ${colors.black};
    box-shadow: none;
    font-size: 16px;
`
