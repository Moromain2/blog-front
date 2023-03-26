exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allPrismicBlogPost {
          nodes {
            uid
            data {
              publication_date
              featured
              title {
                text
              }
              body {
                text
              }
              cover {
                gatsbyImageData
              }
            }
          }
        }
      }
    `)
    data.allPrismicBlogPost.nodes.forEach(node => {
      const slug = node.uid
      actions.createPage({
        path: `articles/${slug}`,
        component: require.resolve(`./src/pages/articles/article-template.js`),
        context: { slug: slug },
      })
    })
  }
  