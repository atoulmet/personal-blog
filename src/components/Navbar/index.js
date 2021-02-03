import React from 'react'

import {
  DesktopContainer,
  NavItem,
  DesktopWrapper,
  ItemWrapper,
  LinkWrapper,
} from './style'
import PictureBlock from '../PictureBlock'
import { getLocaleColor, HighlightedItem, getMenuData } from '../Common'

const Navbar = props => {
  const getMenuItems = pathname => {
    const menuDataWithActive = getMenuData(pathname)

    return menuDataWithActive.map(({ title, link, isActive }) => {
      const localeColor = getLocaleColor(link)

      return (
        <ItemWrapper key={link} isActive={isActive}>
          <HighlightedItem localeColor={localeColor}>
            <NavItem to={link}>{title}</NavItem>
          </HighlightedItem>
        </ItemWrapper>
      )
    })
  }

  const { pathname } = props.location
  const isAboutPage = pathname === '/about/'
  const menuItems = getMenuItems(pathname)

  return (
    <DesktopContainer>
      <LinkWrapper to="/">
        {isAboutPage ? <span /> : <PictureBlock pathname={pathname} />}
      </LinkWrapper>
      <DesktopWrapper>{menuItems}</DesktopWrapper>
    </DesktopContainer>
  )
}

export default Navbar
