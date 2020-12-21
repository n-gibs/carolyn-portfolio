const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {data} = await graphql(`
    {
      studies:allAirtable(filter: { table: { eq: "Case Studies" } }) {
        nodes {
          data {
            slug
          }
        }
      }
    }
  `);

  console.log(data)

  data.studies.nodes.forEach(study => {
    createPage({
      path: `/case-studies/${study.data.slug}`,
      component: path.resolve(`src/templates/projects-template.js`),
      context: {
        slug: study.data.slug,
      },
    })
  })
}
