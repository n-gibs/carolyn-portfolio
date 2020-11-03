import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import CaseStudies from "../components/CaseStudies"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const CaseStudiesPage = ({
  data: {
    allStrapiCaseStudies: { nodes: studies },
  },
}) => {
  return (
    <Layout>
      <SEO title="Case Studies" description="Carolyn's Case Studies"/>
      <section className="projects-page">
        <CaseStudies studies={studies} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiCaseStudies {
      nodes {
        id
        slug
        Title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default CaseStudiesPage
