import { generateMedia } from 'styled-media-query'
import theme from './Theme'

const Breakpoints = generateMedia({
  mobileL: theme.breakpoints[0],
  tabletP: theme.breakpoints[1],
  tabletL: theme.breakpoints[2],
  laptop: theme.breakpoints[3],
  desktop: theme.breakpoints[4]
})

export default Breakpoints
