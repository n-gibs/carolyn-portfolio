import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const Template = ({data}) => {
  console.log(data.study.nodes);
  const { content, title, description } = data.study.nodes[0].data
  return (
    <Layout>
      <SEO title={title} description={description} />
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
    study: allAirtable(
      filter: { table: { eq: "Case Studies" }, data: { slug: { eq: $slug } } }
    ) {
      nodes {
        data {
          content
          description
          title
        }
      }
    }
  }
`
export default Template
