/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Book Landing page'
  },
  plugins: [
	  {
		resolve: `gatsby-source-filesystem`,
		options: {
      	  name: `img`,
      	  path: `${__dirname}/src/assets/img`,
      	},
	  },
	  `gatsby-plugin-sharp`,
	  `gatsby-transformer-sharp`
  ],
}
