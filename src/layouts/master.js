import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import '../theme/theme.css'

import Wrapper from '@core/Wrapper'
import GlobalStyle from '@src/styles/global'
import SEO from './seo'
import theme from '@src/theme'

import { DarkModeProvider } from '../hooks/useDarkMode'

const Layout = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <SEO title={title}/>
        <GlobalStyle />
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

Layout.defaultProps = {
  title: 'Title'
}

export default Layout
