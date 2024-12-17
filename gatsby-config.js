module.exports = {
    siteMetadata: {
      title: "Mi Sitio Gatsby Básico",
      description: "Un sitio básico creado con Gatsby",
      author: "@tu-nombre"
    },
    plugins: [
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-decap-cms`,
    ],
  };