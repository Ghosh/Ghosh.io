import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import Reset from '@stylekit/ui/Reset'

import Theme from '../styles/Theme'
import GlobalStyle from '../styles/GlobalStyle'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme}>
        <Reset />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
