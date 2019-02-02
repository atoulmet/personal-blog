import { Link } from "gatsby"
import styled, { css } from 'styled-components'
import { media } from '../Common/helpers'

import { colors } from '../Common/'

export const ResponsiveContainer = styled.div`
      ${({isOpened}) => isOpened && 
      css`position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: white;
      z-index: 99;
      height: 100%;
      `}
      ${media.minWidth.sm} {
            display: none;
      }
      padding: 30px;
`

export const LinkWrapper = styled(Link)`
      color: ${colors.black};
      box-shadow: none;
`

export const NavItem = styled(Link)`
      color: ${colors.black};
      font-weight: bold;
      font-size: 24px;
      box-shadow: none;
`

export const MenuTitle = styled.div`
      color: ${colors.black};
      font-weight: bold;
      font-size: 24px;
`

export const NavLink = styled.div`
      margin: 15px;
      padding: 0 70px;
      ${({isActive, localeColor}) => isActive && 
            `background-color: ${localeColor}`}
`;

export const NavbarTop = styled.div`
      display: flex;
      flex-direction: row;
      ${({isOpened}) => isOpened && 'margin-left: 15px;'}
      justify-content: ${({isAboutPage, isOpened}) => isAboutPage && !isOpened ? 'flex-end': 'space-between'};
`;

export const Navlist = styled.div`
      ${({isOpened}) => !isOpened && 'display : none !important'};
      background-color: ${colors.white};
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 60px;
`;