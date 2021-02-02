import styled from 'styled-components'
import { Link } from 'gatsby'

import {colors} from '../../components/Common'
import { media } from '../../components/Common/helpers'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    font-size: 21px;
    font-weight: 400;
    ${media.maxWidth.lg} {
        padding: 60px 30px;
    }
    ${media.maxWidth.md} {
        font-size: 18px;
    }
    blockquote {
        margin-left: 0;
    }

    img {
        margin-top: 30px;
    }

    ul {
        margin-top: 30px;
        list-style: none;
        li {
            display: flex;
            flex-direction: row;
            &:before {
                padding-right: 15px;
                content: '•';
        }
        }
        ${media.maxWidth.xxs} {
            margin-left: 0;
        }
    }

    p {
        font-size: 21px;
        line-height: 1.58;
        letter-spacing: -.003em;
        margin-bottom: 0
        margin-top: 38px;
        ${media.maxWidth.md} {
            font-size: 18px;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        margin-top: 56px;
        margin-bottom: 8px;
        font-weight: 600;
        ${media.maxWidth.md} {
            margin-top: 0;
        }
    }
    a {
        box-shadow: inset 0 -1px ${colors.black};
    }
    .gatsby-resp-image-link {
        box-shadow: none;
    }
`
export const Content = styled.div`
    max-width: 750px;
    ${media.maxWidth.md} {
        max-width: 100%;
    }
`

export const Image = styled.div`
    background-image: url("${({picture}) => picture}");
    min-height: 400px;
    margin: 15px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Title = styled.h1`
    margin: 24px 0;
    font-weight: 400;
    line-height: 1.25;
    ${media.maxWidth.md} {
        white-space: initial;
    }
`

export const Header = styled.div`
    margin-bottom: 45px;
`

export const Date = styled.p`
    color: ${colors.grey};
    margin: 0 15px 15px 15px;
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${({alignRight}) => alignRight ? 'flex-end': 'space-between'};
`

export const NavLink = styled(Link)`
    color: ${colors.black};
    box-shadow: none !important;
    font-size: 21px;
    width: 100%;
    text-decoration: underline;
    padding: 30px;
    ${media.maxWidth.md} {
        font-size: 18px;
    }
`
