import React, {Component} from "react"
import styled from "styled-components"

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PictureBlock from '../components/PictureBlock'
import {media} from '../components/Common/helpers'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Background = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  &:after {
    position: absolute;
    left: 0;
    content: "";
    width: 100%;
    height: 50%;
    background-color: #eafff2;
    z-index: -3;
    transform: translateY(-30px);
    transform: translate(-10%, 30%);
    ${media.maxWidth.lg} {
      display: none;
    }
  }
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

const StyledLink = styled.a`
  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }
`

const Paragraph = styled.p`
`

export default class aboutPage extends Component {
  render () {

  return (
  <Layout location={this.props.location}>
    <SEO
              title="About"
              keywords={[`developer`, `freelancer`, `toulmet`, `react`, `asia`]}
          />
    <Container>
      <Content>
      <PictureBlock pathname={this.props.location.pathname} />
      <AboutText>
        <Background>
        <Paragraph>
          I'm Alexia, a fullstack software engineer.
        </Paragraph>
        <Paragraph>
          After a master's Degree at <StyledLink href="http://www.sciencespo.fr/">Sciences Po Paris</StyledLink>, and several 
          fulfilling <StyledLink href="https://www.linkedin.com/in/alexia-toulmet-55742383/">experiences in Project Management</StyledLink> in the Tech industry, I decided I 
          actually wanted to make things - be able to create stuff on my own 💪
        </Paragraph>

        <Paragraph>
          I studied <StyledLink href="https://www.42.us.org/">software engineering at 42
          </StyledLink> and worked at the <StyledLink href="https://payfit.com/fr/">PayFit rocket</StyledLink> before 
          deciding to start my own projects, and becoming a freelancer. 
          When building apps, I love to use ReactJS, Redux, NodeJS but I'm a quick learner and adapt really fast.
        </Paragraph>

        <Paragraph>
        I'm passionate about creation, gender diversity and always eager to learn new things. 
        I had the amazing opportunity to learn Chinese in Taipei and Beijing for almost 2 years  - so I'd probably add Asia to the list of my passions.
        </Paragraph>
        <Paragraph>
        Can't wait to discover more 🚀
        </Paragraph>
        </Background>
      </AboutText>
      </Content>
    </Container>
    </Layout>
)
}
}