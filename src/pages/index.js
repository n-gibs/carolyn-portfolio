import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import CaseStudies from "../components/CaseStudies"
//import Blogs from "../components/Blogs"
export default ({data}) => {
  const {allAirtable: {nodes}} = data;
  return (
    <Layout children="index">
      <Hero/>
      <CaseStudies studies={nodes} showLink />
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
