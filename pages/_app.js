import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import Normalize from '@stylekit/ui/Normalize'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
