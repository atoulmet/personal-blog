import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Introduction from '../components/Introduction'
import Layout from '../components/Layout'
import BlogPostList from '../components/BlogPostList'
import SEO from '../components/seo'

class BlogIndex extends Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { pathname } = location

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `alexia`, `freelancer`, `paris`]}
        />
        <Introduction pathname={pathname} />
        <BlogPostList hasSubheader={true} pathname={pathname} />
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
