import React, { Fragment, Component } from 'react'

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import {colors, getLocaleColor} from '../components/Common'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import Footer from '../components/Footer'

const GlobalStyle = styled.div`
  * {
    font-family: 'Open Sans', sans-serif ;
    a {
      color: ${colors.black};
    }
    ::selection {
      background: ${({pathname}) => getLocaleColor(pathname)};
    }
  }
`

class Layout extends Component {
  render() {
    const { location, children } = this.props

    return (
      <GlobalStyle pathname={location.pathname}>
        <ResponsiveNavbar pathname={location.pathname} />
        <Navbar location={location}/>
        {children}
        <Footer location={location}/>
      </GlobalStyle>
    )
  }
}

export default Layout
