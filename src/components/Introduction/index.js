import React, {Component} from 'react'

import { Container, Text } from './style'
import {getLocaleColor, HighlightedIntro} from '../Common'

class Introduction extends Component {
  render() {
    const localeColor = getLocaleColor(this.props.pathname)

  return (
    <Container>
      <Text>
        I'm Alexia, <HighlightedIntro localeColor={localeColor}>a fullstack software engineer</HighlightedIntro>.
        I'm passionate about the tech industry, 
        gender diversity and creation.
      </Text>
    </Container>
  )
}
}

export default Introduction
