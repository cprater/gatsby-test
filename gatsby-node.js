/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require('path')
const slash = require('slash')

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//   return new Promise((resolve, reject) => {
//     const pageTemplate = path.resolve(`src/pages/page-2.js`)
//
//     graphql(`
//       {
//         persons {
//           id
//           name
//           description
//         }
//       }
//     `
//     ).then(result => {
//       console.log(result);
//       if (result.errors) {
//         console.log(result.errors)
//       }
//       result.data.persons.map(person => {
//         createPage({
//           component: slash(pageTemplate),
//           context: {
//             data: person
//           }
//         })
//       })
//       resolve()
//     })
//   })
// }
