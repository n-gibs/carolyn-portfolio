import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const CaseStudy = (props, Title, description, id, url, slug, image, index) => {
  console.log(props);
  return (
    <article className="project">
      {props.image && (
        <Image fluid={props.image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{props.index + 1}.</span>
        <h3>{props.Title || "default title"}</h3>
        <p className="project-desc">{props.description}</p>
        <div className="project-links">
          <Link to={`/case-studies/${props.slug}`} className="btn center-btn">
            more info
          </Link>
          {props.url && <a href={props.url}>
            <FaShareSquare className="project-icon" />
          </a>}

        </div>
      </div>
    </article>
  )
}

CaseStudy.propTypes = {
  Title: PropTypes.string.isRequired,
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug:PropTypes.string.isRequired,
}

export default CaseStudy
