import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import Normalize from '@stylekit/ui/Normalize'

import Theme from '../Theme.js'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme}>
        <Normalize />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
