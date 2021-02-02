import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Container, Picture, Subtitle, Title, Wrapper } from './style'
import { getLocaleColor, HighlightedItem } from '../Common'

class PictureBlock extends React.PureComponent {
  render() {
    const { pathname, hidePicture } = this.props
    const localeColor = getLocaleColor(pathname)

    return (
      <Container>
        {!hidePicture && (
          <StaticQuery
            query={picQuery}
            render={data => {
              return (
                <Picture
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={'alexia-toulmet'}
                />
              )
            }}
          />
        )}

        <Wrapper>
          <Title>
            <HighlightedItem localeColor={localeColor}>
              Alexia Toulmet
            </HighlightedItem>
          </Title>
          <Subtitle>Let's build things!</Subtitle>
        </Wrapper>
      </Container>
    )
  }
}

const picQuery = graphql`
  query PicQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 110, height: 110) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default PictureBlock

// query {
//     office: file(relativePath: { eq: "office.jpg" }) {
//       childImageSharp {
//         fluid(quality: 100, maxWidth: 800) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
