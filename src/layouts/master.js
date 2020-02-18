import React from "react"
import PropTypes from "prop-types"


import GlobalStyle from '../styles/Global'
import SEO from './seo'

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO title={title}/>
      <GlobalStyle />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
