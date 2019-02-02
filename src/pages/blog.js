import React, {Component} from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import BlogPostList from '../components/BlogPostList'

class BlogPage extends Component {
    render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={this.props.location} title={siteTitle}> 
        <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <BlogPostList hasSubheader={false} />
        </Layout>
    )
    } 
}

export default BlogPage

export const pageQuery = graphql`
        query {
        site {
        siteMetadata {
            title
        }
    }
    }
`