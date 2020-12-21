import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import CaseStudies from "../components/CaseStudies"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const CaseStudiesPage = ({
  data: {
    allAirtable: { nodes: studies },
  },
}) => {
  return (
    <Layout>
      <SEO title="Case Studies" description="Carolyn's Case Studies" />
      <section className="projects-page">
        <CaseStudies studies={studies} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Case Studies"}}) {
      nodes {
        id
        data {
          content
          slug
          title
          description
          url
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

export default CaseStudiesPage
