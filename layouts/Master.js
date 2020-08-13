import React from 'react'
import PropTypes from 'prop-types'

// @TODO: Update OG Tags
// @TODO: Add OG Image
// @TODO: Add SVG Favicon
const Master = ({ children }) => {
  return (
    <html className="no-js" lang="en">

      <head>
        <meta charSet="utf-8" />
        <title>Ghosh - Portfolio of Indrashish Ghosh</title>
        <meta name="description" content="Design, Developer, Maker. Indrashish Ghosh Protfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Ghosh - Portfolio of Indrashish Ghosh" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ghosh.io/" />
        <meta property="og:image" content="" />

        <link rel="manifest" href="site.webmanifest" />
        <link rel="apple-touch-icon" href="icon.png" />

        <meta name="theme-color" content="#fafafa" />
      </head>

      <body>
        {children}
      </body>

    </html>

  )
}

Master.propTypes = {
  children: PropTypes.node.isRequired
}

export default Master
