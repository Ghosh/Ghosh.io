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
    width: 40px;
    height: 40px;
    fill: #fff;
    transition: transform 0.15s ease-in-out
  }

  &:hover {
    svg {
      &:hover {
        transform: scale(1.1)
      }
    }
  }
`

const Overlay = ({ isPlaying, setIsPlaying }) => {
  return (
    <Scrim>
      {isPlaying && <Pause onClick={() => setIsPlaying(false)}/>}
      {!isPlaying && <Play onClick={() => setIsPlaying(true)}/>}
    </Scrim>
  )
}

Overlay.propTypes = {
  setIsPlaying: PropTypes.func,
  isPlaying: PropTypes.bool
}

Overlay.defaultProps = {
  setIsPlaying: () => {},
  isPlaying: false
}

export default Overlay
