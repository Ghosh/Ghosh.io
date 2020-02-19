import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components";



import GlobalStyle from '../styles/Global'
import SEO from './seo'
import theme from '@src/theme'

const Layout = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title={title}/>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
