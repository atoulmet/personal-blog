import React, { Fragment, Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import Footer from '../components/Footer'

const GlobalStyle = styled.div`
  * {
    font-family: 'Open Sans', sans-serif !important;
    list-style-position: inside;
  blockquote {
    margin-left: 0;
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
