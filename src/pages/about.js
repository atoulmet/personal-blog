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
        <Paragraph>
          I'm Alexia, a fullstack software engineer.
        </Paragraph>
        <Paragraph>
          After a master's Degree at Sciences Po Paris, and several fulfilling 
          experiences in Project Management in the Tech industry, I decided I 
          actually wanted to make things - be able to create stuff on my own.
        </Paragraph>

        <Paragraph>
          I studied software engineering at 42 and worked at the PayFit rocket
          before deciding to start my own projects, and becoming a freelancer. 
          When building apps, I love to use ReactJS, Redux, NodeJS but I'm a quick learner and adapt really fast.
        </Paragraph>

        <Paragraph>
        I'm passionate about creation, gender diversity and always eager to learn new things. 
        I had the amazing opportunity to learn Chinese in Taipei and Beijing for almost 2 years  - so I'd probably add Asia to the list of my passions.
        </Paragraph>
        <Paragraph>
        Can't wait to discover more 
        </Paragraph>
      </AboutText>
      </Content>
    </Container>
    </Layout>
)
}
}