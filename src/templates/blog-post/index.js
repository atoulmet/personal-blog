import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import {
  Container,
  Content,
  Image,
  Title,
  Date,
  NavLink,
  LinksWrapper,
  Header,
} from './style'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const coverPicture = post.frontmatter.cover_image

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          image={coverPicture.publicURL}
          pathname={this.props.location.pathname}
        />
        <Container>
          <Content>
            <Header>
              <Title>{post.frontmatter.title}</Title>
              <Date> {post.frontmatter.date}</Date>
              {coverPicture && <Image picture={coverPicture.publicURL} />}
            </Header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />

            <LinksWrapper alignRight={!!next && !previous}>
              {previous && (
                <NavLink to={`${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </NavLink>
              )}

              {next && (
                <NavLink to={`${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </NavLink>
              )}
            </LinksWrapper>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
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
`
