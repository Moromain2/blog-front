import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleTemplate = ({data}) => {
  const PostData = data.allPrismicBlogPost.nodes[0].data
  return (
    <div>
        <h1>{PostData.title.text}</h1>
        <time dateTime={PostData.publication_date}>{PostData.publication_date}</time>
        <GatsbyImage
            image={getImage(PostData.cover)}
            alt={PostData.title.text}
        />
        <p>{PostData.body.text}</p>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    allPrismicBlogPost(filter: {uid: {eq: $slug}}) {
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

export default ArticleTemplate
