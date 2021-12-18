require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cemût Osteria Furlana`,
    description: `La tipica osteria friulana. A Trieste. Il meglio dell'enogastronomia regionale.`,
    author: `@ianseberg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `87a6mllqny63`,
        accessToken: `KaXVcYZjq2L0wUgNMu8YpatwwUD_yC4njnhqClA7xmw`,
      },
    },
    {
			resolve: 'gatsby-plugin-snipcartv3',
			options: {
        apiKey: process.env.SNIPCART_API,
        autopop: true
			}
		},
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },

  ],
}
