import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'
import { HighlightedItem, getLocaleColor } from '../components/Common'
import { media } from '../components/Common/helpers'
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
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

const Bottom = styled.p`
  max-width: 570px;
  text-align: center;
`

const ProjectsPage = props => {
  const getProjectsItems = projects => {
    return projects.map((elem, index) => {
      const { frontmatter } = elem.node
      const {
        picture,
        title,
        onlineUrl,
        date,
        type,
        stillPic,
        animPic,
      } = frontmatter

      return (
        <ProjectItem
          title={title}
          description={elem.node.html}
          picture={picture}
          onlineUrl={onlineUrl}
          date={date}
          key={`project-item-${index}`}
          content={elem.node}
          stillPic={stillPic}
          animPic={animPic}
        />
      )
    })
  }

  const projects = props.data.allMarkdownRemark.edges
  const professionalProjects = projects.filter(
    elem => elem.node.frontmatter.type === 'professional'
  )
  const personalProjects = projects.filter(
    elem => elem.node.frontmatter.type === 'personal'
  )
  const localeColor = getLocaleColor(props.location.pathname)

  return (
    <Layout location={props.location}>
      <SEO title="Projects" keywords={[`blog`, `javascript`, `react`]} />
      <Container>
        <Title>
          <HighlightedItem localeColor={localeColor}>
            Professional
          </HighlightedItem>
        </Title>
        <Wrapper>{getProjectsItems(professionalProjects)}</Wrapper>

        <Title>
          <HighlightedItem localeColor={localeColor}>Personal</HighlightedItem>
        </Title>
        <Wrapper>{getProjectsItems(personalProjects)}</Wrapper>
      </Container>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___order] }
      filter: { fields: { type: { eq: "projects" } } }
    ) {
      edges {
        node {
          excerpt
          html
          frontmatter {
            title
            date
            type
            onlineUrl
            stillPic {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240) {
                  srcSet
                }
              }
            }
            animPic {
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
