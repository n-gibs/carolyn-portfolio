import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
    <SEO title="404 Error" description="This Page is Not Found"/>
      <main className="error-page">
        <div className="error-container">
          <h1>oops its a dead end</h1>
          <Link to="/" className="btn">
            back to home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
