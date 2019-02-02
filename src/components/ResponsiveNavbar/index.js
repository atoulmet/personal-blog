import React from 'react'

import { ResponsiveContainer, Navlist, NavItem, NavLink, NavbarTop, MenuTitle, LinkWrapper } from './style'
import PictureBlock from '../PictureBlock'
import BurgerMenu from '../BurgerMenu'
import { getLocaleColor,  getMenuData, HighlightedItem } from '../Common'


class ResponsiveNavbar extends React.PureComponent {   
    state= {
        isOpened: false
    }

    getMenuItems = (localeColor, pathname) => {
        const menuDataWithActive = getMenuData(pathname)

        return (
            menuDataWithActive.map(({ title, link, isActive }) => {
                    return (
                        <NavLink isActive={isActive} localeColor={localeColor} key={link}>
                            <NavItem to={link} >
                                {title}
                            </NavItem>
                        </NavLink>
                    )
                
            }
            )
        )
    }

    toggleMenu = (e) => {
        e.preventDefault()
        this.setState({ isOpened: !this.state.isOpened})
    }

    render() {
        const { pathname } = this.props
        const { isOpened } = this.state
        const localeColor = getLocaleColor(pathname)
        const menuItems = this.getMenuItems(localeColor, pathname)
        const isAboutPage = pathname === '/about/'

        return (
            <ResponsiveContainer isOpened={isOpened}>
                <NavbarTop isAboutPage={isAboutPage} isOpened={isOpened}>
                    {isOpened && 
                        <HighlightedItem localeColor={localeColor}>
                            <MenuTitle>
                                Menu
                            </MenuTitle>
                        </HighlightedItem>
                    }
                    
                    {!isOpened && !isAboutPage && (
                        <LinkWrapper to='/'>
                            <PictureBlock pathname={pathname} hidePicture={true}/>
                        </LinkWrapper>
                    )
                    }
                    <BurgerMenu isOpened={isOpened} toggleMenu={this.toggleMenu} />
                </NavbarTop>
                <Navlist isOpened={isOpened}>
                    {menuItems}
                </Navlist>
                
            </ResponsiveContainer>
        )
    }
}

export default ResponsiveNavbar
