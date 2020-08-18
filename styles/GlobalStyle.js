import { createGlobalStyle } from 'styled-components'
import theme from './Theme'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,Arial,sans-serif;
    box-sizing: border-box;
    font-size: 62.5%; /* Hack to make 1.4rem = 14px */

    background-color: var(--site-bg)
  }

  body {
    font-size: 1.6rem;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,Arial,sans-serif;
    color: ${ theme.colors.neutral[700] }
  }
`

export default GlobalStyle
