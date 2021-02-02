import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, image, pathname }) {

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
      
        const {siteUrl} = data.site.siteMetadata
        const metaImage = `${siteUrl}${image ||
          data.ogImage.childImageSharp.fluid.src}`
        const metaDescription = description || data.site.siteMetadata.description

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            link={[{
              rel: 'canonical',
              href: pathname ? `${siteUrl}${pathname}` : siteUrl
            }]}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: 'og:logo',
                content: metaImage
              },
              {
                property: 'og:image',
                content: metaImage,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: 'twitter:image',
                content: metaImage,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    ogImage: file(relativePath: { regex: "/meta-image.png/" }) {
        childImageSharp {
            fluid(maxWidth: 110, maxHeight: 110) {
              ...GatsbyImageSharpFluid
        }
        }
    }
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        social {
          twitter
          github
    },
      }
    }
  }
`
