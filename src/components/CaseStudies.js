import React from "react"
import Title from "./Title"
import CaseStudy from "./CaseStudy"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CaseStudies = (props, studies, showLink) => {

  return (
    <section className="section projects">
      <Title title="Case Studies"/>
      <div className="section-center projects">
        {Object.values(props.studies).map((study, index) => {
          return <CaseStudy key={study.id} index={index} {...study} />
        })}
      </div>
      {showLink && (
        <Link to="/case-studies" className="btn center-btn">
          case studies
        </Link>
      )}
    </section>
  )
}

CaseStudies.propTypes = {
  studies: PropTypes.array.isRequired,
  showLink: PropTypes.bool.isRequired,
}

export default CaseStudies
