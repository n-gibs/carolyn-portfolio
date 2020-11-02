import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import CaseStudies from "../components/CaseStudies"
//import Blogs from "../components/Blogs"
export default ({data}) => {
  const {allStrapiCaseStudies: {nodes: studies}} = data;
  return (
    <Layout children="index">
      <Hero/>
      {/* <CaseStudies studies={studies} title="Case Studies" showLink /> */}
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
// ...GatsbyImageSharpFluid
