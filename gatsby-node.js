const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      caseStudies: allStrapiCaseStudies {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.caseStudies.nodes.forEach(study => {
    createPage({
      path: `/case-studies/${study.slug}`,
      component: path.resolve(`src/templates/projects-template.js`),
      context: {
        slug: study.slug,
      },
    })
  })
}
