module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-162018174-1',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'simple-dad-joke',
        short_name: 'dad-joke',
        start_url: '/',
        background_color: '#2d2d2d',
        theme_color: '#ffffff',
        display: 'standalone',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
}
