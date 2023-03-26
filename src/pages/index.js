import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query {
    prismicHome {
      data {
        hero_title {
          text
        }
        hero_text {
          text
        }
      }
    }
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
`

const IndexPage = ({data}) => {
  const homePageData = data.prismicHome.data
  const blogPostsData = data.allPrismicBlogPost.nodes
  console.log(blogPostsData)
  return (
    <main>
      <h1>{homePageData.hero_title.text}</h1>
      <p>{homePageData.hero_text.text}</p>
      <div>
        {blogPostsData.map((post) => (
          <div className="post-card" key={post.uid}>
            <h2>{post.data.title.text}</h2>
            <time dateTime={post.data.publication_date}>{post.data.publication_date}</time>
            <GatsbyImage
              image={getImage(post.data.cover)}
              alt={post.data.title.text}
            />
            <p>{post.data.body.text.slice(0, 150)}...</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
