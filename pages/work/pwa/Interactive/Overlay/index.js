import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Play from './svg/play.svg'
import Pause from './svg/pause.svg'

const Scrim = styled.div`
  position: absolute;
  background-color: rgba(0,0,0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`

const Overlay = ({ isPlaying }) => {
  return (
    <Scrim>
      {isPlaying && <Pause width="40px" height="40px" fill="#fff" />}
      {!isPlaying && <Play width="40px" height="40px" fill="#fff" />}
    </Scrim>
  )
}

Overlay.propTypes = {
  isPlaying: PropTypes.bool
}

Overlay.defaultProps = {
  isPlaying: false
}

export default Overlay
