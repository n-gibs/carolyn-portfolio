import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, Title, description } = data.study
  return (
    <Layout>
      <SEO title={Title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/case-studies" className="btn center-btn">
            Case Studies
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleCaseStudy($slug: String) {
    study: strapiCaseStudies(slug: { eq: $slug }) {
      content
      Title
      description
    }
  }
`
export default ComponentName
