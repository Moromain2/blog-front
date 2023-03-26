import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AllArticles = (props) => {
    const data = useStaticQuery(graphql`
        query {
        allPrismicBlogPost {
            nodes {
            uid
            data {
                featured
                publication_date
                cover {
                gatsbyImageData
                }
                title {
                text
                }
                body {
                text
                }
            }
            }
        }
        }
    `)
    const blogPostsData = data.allPrismicBlogPost.nodes
    return (
        <>
            {blogPostsData.map((post) => (
                <div className="post-card" key={post.uid}>
                    <h2>{post.data.title.text}</h2>
                    <time dateTime={post.data.publication_date}>{post.data.publication_date}</time>
                    <GatsbyImage
                        image={getImage(post.data.cover)}
                        alt={post.data.title.text}
                    />
                    <p>{post.data.body.text}...</p>
                    {
                        (props.path !== undefined)
                        ? <Link to={props.path + post.uid}>Read More</Link>
                        : <Link to={post.uid}>Read More</Link>
                    }         
                </div>
            ))}
        </>
    )
}

export default AllArticles