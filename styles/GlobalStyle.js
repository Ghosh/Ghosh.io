import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,Arial,sans-serif;
    box-sizing: border-box;
    font-size: 62.5%; /* Hack to make 1.4rem = 14px */
  }

  body {
    font-size: 1.6rem
  }
`

export default GlobalStyle
