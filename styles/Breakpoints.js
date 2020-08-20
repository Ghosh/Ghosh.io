import { generateMedia } from 'styled-media-query'
import theme from './Theme'

const Breakpoints = generateMedia({
  mobileL: theme.breakpoints[0], // 480px
  tabletP: theme.breakpoints[1], // 768px
  tabletL: theme.breakpoints[2], // 992px
  laptop: theme.breakpoints[3], // 1200px
  desktop: theme.breakpoints[4] // 1440px
})

export default Breakpoints
