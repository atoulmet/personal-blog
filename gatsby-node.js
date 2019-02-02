const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post/index.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { type: { eq: "blog" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    const type = getNode(node.parent).sourceInstanceName
    // set a `type` field to the node which will be "posts", "projects" or "trips"
    createNodeField({ name: 'type', node, value: type })
  }// in the "Starter blog" this part already exists and adds a `slug` field to the node, here we add another field `type`
  // if (node.internal.type === `MarkdownRemark`) {
  //   // `sourceInstanceName` here is the name of the folder the .md file is in
  //   const type = getNode(node.parent).sourceInstanceName
  //   // set a `type` field to the node which will be "posts", "projects" or "trips"
  //   createNodeField({ name: 'type', node, value: type })
  // }
}
