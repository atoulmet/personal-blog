import React, { Fragment, Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import {colors} from '../components/Common'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import Footer from '../components/Footer'

const GlobalStyle = styled.div`
  * {
    font-family: 'Open Sans', sans-serif ;
    blockquote {
      margin-left: 0;
    }
    li {
      margin-left: 15px;
    }
    code {
      font-family: Monaco;
    }
    pre[class*=language-] {
      background-color: ${colors.black};
      border-radius: 5px;
      color: ${colors.white};
      margin: 30px;
    }
    :not(pre)>code[class*=language-] {
      background-color: ${colors.blue};
      color: ${colors.black};
      padding: 5px;
      border-radius: 3px;
    }
    a {
      box-shadow: none;
      font-weight: 600;
      color: ${colors.black};
    }
  }
`

class Layout extends Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <GlobalStyle>
        <ResponsiveNavbar pathname={location.pathname} />
        <Navbar location={location}/>
        {children}
        <Footer location={location}/>
      </GlobalStyle>
    )
  }
}

export default Layout
