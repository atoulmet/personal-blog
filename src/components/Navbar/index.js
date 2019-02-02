import React from 'react'

import { DesktopContainer, NavItem, DesktopWrapper, ItemWrapper, LinkWrapper } from './style'
import PictureBlock from '../PictureBlock'
import { getLocaleColor, HighlightedItem, getMenuData } from '../Common'

class Navbar extends React.PureComponent {


    getMenuItems = (pathname) => {
        const menuDataWithActive = getMenuData(pathname)

        return (
            menuDataWithActive.map(({ title, link, isActive }) => {
                const localeColor = getLocaleColor(pathname)

                if (isActive) {
                    return (
                        <ItemWrapper key={link}>
                        <HighlightedItem localeColor={localeColor} >
                            <NavItem to={link}>{title}</NavItem>
                        </HighlightedItem>
                        </ItemWrapper>
                    )
                }
                else {
                    return (
                        <ItemWrapper key={link}>
                        <NavItem to={link}>{title}</NavItem>
                        </ItemWrapper>
                    )
                }
            }
            )
        )
    }
    render() {
        const { pathname } = this.props.location
        const isAboutPage = pathname === '/about/'
        const menuItems = this.getMenuItems(pathname)

        return (
            <DesktopContainer >
                <LinkWrapper to='/'>
                {isAboutPage ? <span /> : <PictureBlock pathname={pathname}/>}
                </LinkWrapper>
                <DesktopWrapper>
                    {menuItems}
                </DesktopWrapper>
            </DesktopContainer>
        )
    }
}

export default Navbar
