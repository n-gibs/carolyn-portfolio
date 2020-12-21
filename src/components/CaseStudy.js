import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const CaseStudy = ({title, description, id, url, slug, image, index}) => {
  return (
    <article className="project">
      {image && (
        <Image fluid={image.localFiles[0].childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-links">
          <Link to={`/case-studies/${slug}`} className="btn center-btn">
            more info
          </Link>
          {url && <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>}

        </div>
      </div>
    </article>
  )
}

CaseStudy.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug:PropTypes.string.isRequired,
}

export default CaseStudy
