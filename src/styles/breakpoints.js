import { generateMedia } from 'styled-media-query'
import { breakpoints } from '@src/theme'

const Breakpoints = generateMedia({
  mobileL: breakpoints[0],
  tabletP: breakpoints[1],
  tabletL: breakpoints[2],
  laptop: breakpoints[3],
  desktop: breakpoints[4]
})

export default Breakpoints
