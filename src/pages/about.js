import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({
  data: {
    about
  },
}) => {
  console.log(about);
  const { title, description, image } = about.nodes[0].data
  return (
    <Layout>
    <SEO title="About" description="about Carolyn"/>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.localFiles[0].childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{description}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allAirtable(filter: {table: {eq: "About"}}) {
      nodes {
        id
        data {
          title
          description
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default About
