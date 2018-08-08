module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    {
      'resolve': 'gatsby-source-graphcms',
      'options': {
        'endpoint': 'https://api-uswest.graphcms.com/v1/cjkikj36x01dd01deskay779m/master',
        'query': `{
          allPerson: persons {
            id
            name
            description
          }
        }`
      }
    }
  ],
}
