import React, {Component} from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"

import SEO from '../components/seo'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'
import {HighlightedItem} from '../components/Common'
import {media} from '../components/Common/helpers'
// import SEO from '../components/seo'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media.maxWidth.md} {
        padding-top: 60px;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 60px 0;
    p {
        margin-bottom: 0;
    }
    a {
        &:hover {
            box-shadow: 0 1px 0 0 currentColor;
        }
    }

`

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
`

class ProjectsPage extends Component {
    getProjectsItems = () => {
        const projects = this.props.data.allMarkdownRemark.edges

        return (projects.map((elem, index) => {
            const {frontmatter} = elem.node
            return (
                <ProjectItem title={frontmatter.title} description={elem.node.html} picture={frontmatter.picture} key={`project-item-${index}`} />
            )
        }
        ))
    }

    render() {
        const projectsItem = this.getProjectsItems()

            return (
                <Layout location={this.props.location}>
                <SEO
                title="Projects"
                keywords={[`blog`, `javascript`, `react`]}
            />
                <Container>
                    <Title>
                        <HighlightedItem>
                        Here is what I worked on 
                        </HighlightedItem>
                    </Title>
                    {/* Make it possible to choose header automatically from MD file 
                    Parse the MD File differently, to have only 1 file. With header section, give the header cover each time
                    and the subtitle */}
                    <Wrapper>
                        {projectsItem}
                    </Wrapper>
                </Container>
            </Layout>
        )}
}

export default ProjectsPage

export const pageQuery = graphql`
    query {
        site {
        siteMetadata {
            title
        }
        },
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { type: { eq: "projects" } } }
            ) {
        edges {
            node {
            excerpt
            html
            frontmatter {
                title
                picture {
                publicURL
                childImageSharp {
                    sizes(maxWidth: 1240 ) {
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