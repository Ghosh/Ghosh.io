import { generateMedia } from 'styled-media-query'

const Breakpoints = generateMedia({
  mobileL: '480px',
  tabletP: '768px',
  tabletL: '992px',
  laptop: '1200px',
  desktop: '2880px'
})

export default Breakpoints
