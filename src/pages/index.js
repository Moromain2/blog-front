import * as React from "react"
import { graphql } from "gatsby"
import AllArticles from "../components/all-articles"

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
  }
`

const IndexPage = ({data}) => {
  const homePageData = data.prismicHome.data
  return (
    <main>
      <h1>{homePageData.hero_title.text}</h1>
      <p>{homePageData.hero_text.text}</p>
      <h1>Latest Posts</h1>
      <AllArticles path= 'articles/'/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
