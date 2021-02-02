import React, { Component } from 'react'

import { Container, Text } from './style'
import { getLocaleColor, HighlightedIntro } from '../Common'

class Introduction extends Component {
  render() {
    const localeColor = getLocaleColor(this.props.pathname)

    return (
      <Container>
        <Text>
          I'm Alexia,{' '}
          <HighlightedIntro localeColor={localeColor}>a</HighlightedIntro>
          <HighlightedIntro localeColor={localeColor}>
            {' '}
            fullstack
          </HighlightedIntro>
          <HighlightedIntro localeColor={localeColor}>
            {' '}
            software
          </HighlightedIntro>
          <HighlightedIntro localeColor={localeColor}>
            {' '}
            engineer
          </HighlightedIntro>
          . When I'm not busy creating new React components, I'm teaching code
          🚀
        </Text>
      </Container>
    )
  }
}

export default Introduction
