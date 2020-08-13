import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

// @TODO: Update OG Tags
// @TODO: Add OG Image
// @TODO: Add SVG Favicon
const Master = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ghosh - Portfolio of Indrashish Ghosh</title>
        <meta name="description" content="Design, Developer, Maker. Indrashish Ghosh Protfolio" />
      </Helmet>
      {children}
    </>
  )
}

Master.propTypes = {
  children: PropTypes.node.isRequired
}

export default Master
