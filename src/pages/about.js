import React, {Component} from "react"
import styled from "styled-components"

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PictureBlock from '../components/PictureBlock'
import {media} from '../components/Common/helpers'
import {HighlightedIntro, colors} from '../components/Common'

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
        <Paragraph>
          I'm Alexia, a <HighlightedIntro localeColor={colors.green}>fullstack software engineer</HighlightedIntro>.
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
          When building apps, I love to use <HighlightedIntro localeColor={colors.green}>ReactJS, Redux, NodeJS</HighlightedIntro> but I'm a quick learner and adapt really fast.
        </Paragraph>

        <Paragraph>
        I'm passionate about <HighlightedIntro localeColor={colors.green}>creation, gender diversity</HighlightedIntro> and always eager to <HighlightedIntro localeColor={colors.green}>learn new things</HighlightedIntro>. 
        I had the amazing opportunity to learn Chinese in Taipei and Beijing for almost 2 years  - so I'd probably add Asia to the list of my passions.
        </Paragraph>
        <Paragraph>
        Can't wait to discover more 🚀
        </Paragraph>
      </AboutText>
      </Content>
    </Container>
    </Layout>
)
}
}