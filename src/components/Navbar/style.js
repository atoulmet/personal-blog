import { Link } from "gatsby"
import styled from 'styled-components'
import {media} from '../Common/helpers'

import {colors} from '../Common/'

export const DesktopContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 30px;
      ${media.maxWidth.sm} {
            display: none;
      }
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

export const ItemWrapper = styled.div`
      margin-right: 15px;
      &:hover {
            span {
                  &:after {
                        transition-duration: 0.6s;
                        width: 100%;      
                  }     
            }
      }
      span {
            &:after {
                  width: ${({isActive}) => isActive ? '100%' : 0 };
            }
            
      }
`;

export const DesktopWrapper = styled.div`
      display: flex;
      align-items: center;
      height: 110px;
`;