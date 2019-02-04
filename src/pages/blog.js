import React, {Component} from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import BlogPostList from '../components/BlogPostList'

class BlogPage extends Component {
    render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const {pathname} = location

    return (
        <Layout location={location} title={siteTitle}> 
        <SEO
            title="Blog"
            keywords={[`blog`, `freelancer`, `tech`, `react`]}
        />
        <BlogPostList hasSubheader={false} pathname={pathname}/>
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