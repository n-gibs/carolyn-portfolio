import React from "react"
import Title from "./Title"
import CaseStudy from "./CaseStudy"
import { Link } from "gatsby"
const CaseStudies = (studies, title, showLink) => {
  console.log(studies);
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects">
        {studies.map((study, index) => {
          return <CaseStudy key={study.id} index={index} {...study} />
        })}
      </div>
      {showLink && (
        <Link to="/case-studies" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default CaseStudies
