import React from "react"
import Title from "./Title"
import CaseStudy from "./CaseStudy"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import FadeInSection from "./FadeInSection"

const CaseStudies = ({ studies, showLink }) => {
  return (
    <section className="section projects">
      <Title title="Case Studies" />
      <div className="section-center projects">
        {Object.values(studies).map((study, index) => {
          const data = study.data
          return (
            <FadeInSection key={study.id}>
              <CaseStudy key={study.id} index={index} {...data} />
            </FadeInSection>
          )
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
}

export default CaseStudies
