import React, {Component} from "react"
import styled from "styled-components"

import Layout from '../components/Layout'
import PictureBlock from '../components/PictureBlock'
import {media} from '../components/Common/helpers'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  align-items: center;
  ${media.maxWidth.md} {
    padding: 0 30px;
  }
`

const AboutText = styled.div`
  font-size: 24px;
  padding-top: 60px;
  text-align: justify;
  ${media.maxWidth.sm} {
    text-align: center;
  }
`

export default class aboutPage extends Component {
  render () {

  return (
  <Layout location={this.props.location}>
    <Container>
      <Content>
      <PictureBlock pathname={this.props.location.pathname} />
      <AboutText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </AboutText>
      </Content>
    </Container>
    </Layout>
)
}
}