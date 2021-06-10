import React from 'react'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

import PostPreview from '../PostPreview'
import { Subtitle, Container } from './style'

export default class DesktopNavbar extends React.PureComponent {
  render() {
    const { hasSubheader } = this.props

    return (
      <StaticQuery
        query={postListQuery}
        render={data => {
          const posts = data.allMarkdownRemark.edges

          return (
            <Container>
              {hasSubheader && <Subtitle>Latest blog posts</Subtitle>}
              {posts.map(({ node }, index) => {
                const title = node.frontmatter.title || node.fields.slug
                const { duration, cover_image } = node.frontmatter
                const isBlogPage = location.pathname === withPrefix('/blog')

                return (
                  <PostPreview
                    key={`post-preview-${index}`}
                    title={title}
                    to={`/blog${node.fields.slug}`}
                    date={node.frontmatter.date}
                    text={node.excerpt}
                    duration={duration}
                    cover_image={cover_image}
                    pathname={this.props.pathname}
                  />
                )
              })}
            </Container>
          )
        }}
      />
    )
  }
}

const postListQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            duration
            cover_image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
