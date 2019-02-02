import React, {Component} from 'react'
import { graphql } from 'gatsby'

import Introduction from '../components/Introduction'
import Layout from '../components/Layout'
import BlogPostList from '../components/BlogPostList'
import SEO from '../components/seo'

class BlogIndex extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Introduction pathname={this.props.location.pathname} />
        <BlogPostList hasSubheader={true} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
