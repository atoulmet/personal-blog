import React, {Component} from 'react'

import { Container, Text } from './style'
import {getLocaleColor, HighlightedIntro} from '../Common'

class Introduction extends Component {
  render() {
    const localeColor = getLocaleColor(this.props.pathname)

  return (
    <Container>
      <Text>
        I'm Alexia, <HighlightedIntro localeColor={localeColor}>a</HighlightedIntro><HighlightedIntro localeColor={localeColor}> fullstack</HighlightedIntro><HighlightedIntro localeColor={localeColor}> software</HighlightedIntro><HighlightedIntro localeColor={localeColor}> engineer</HighlightedIntro>.
        I'm passionate about creation, gender diversity and always eager to learn new things.
      </Text>
    </Container>
  )
}
}

export default Introduction
