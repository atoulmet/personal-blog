import styled from 'styled-components'

import { media } from './helpers'

export const getLocaleColor = (pathname) => {
    const params = pathname.split('/')
    const firstParam = params[1]
    const localeColors = {
        '': colors.pink,
        'blog': colors.blue,
        'projects': colors.yellow,
        'about': colors.green,
    }
    return (localeColors[firstParam] || colors.blue)
}

const MENU_DATA = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Blog',
        link: '/blog/'
    },
    {
        title: 'Projects',
        link: '/projects/'
    },
    {
        title: 'About',
        link: '/about/'
    },
]

export const getMenuData = (pathname) => {
    const params = pathname.split('/')
    const firstParam = params[1]

    return (
        MENU_DATA.map(item => {
            const link = item.link.replace(/\//g, '' )
            return (
            { ...item, isActive: link === firstParam }
        )})
)}

export const colors = {
    blue: '#E9FAFF',
    pink: '#fef4fe',
    yellow: '#FCF6CE',
    green: '#eafff2',
    white: '#fff',
    black: '#000',
    grey: '#7F7D7D',
}

export const HighlightedIntro = styled.span`
    position: relative;
    &:after {
        position: absolute;
        left: 0;
        content: "";
        width: 103%;
        height: 30px;
        background-color: ${({localeColor}) => localeColor};
        z-index: -3;
        transform: translate(-15px);
        top: 0;
        ${media.maxWidth.sm} {
            height: 20px;
        }
        ${media.maxWidth.xxs} {
            transform: translate(-10px);
        }
    }
    ${media.minWidth.xxs} {
        white-space: nowrap;
    }
`

export const HighlightedItem = styled.span`
    position: relative;
    white-space: nowrap;
    display: flex;
    &:after {
        position: absolute;
        left: 0;
        content: "";
        width: 103%;
        height: 20px;
        background-color: ${({localeColor}) => localeColor};
        z-index: -3;
        transform: translateX(-10px);
    }
    ${media.maxWidth.xxs} {
        white-space: nowrap;
    }
`