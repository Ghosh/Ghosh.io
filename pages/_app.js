import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import Normalize from '@stylekit/ui/Normalize'

import Theme from '../styles/Theme'
import GlobalStyle from '../styles/GlobalStyle'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme}>
        <Normalize />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
