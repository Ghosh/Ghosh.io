import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/lazy'

import Overlay from './Overaly'
import Poster from './Poster'

const Media = ({ name, alt, vid }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHover, setIsHover] = useState(true)
  const [isReady, setIsReady] = useState(false)

  const handleMouseLeave = () => {
    if (isPlaying) setIsHover(false)
    if (!isPlaying) setIsHover(true)
    console.log('Mouse left')
  }

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {isHover &&
        <Overlay isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      }

      {!isReady &&
         <Poster name={name} alt={alt} />
      }

      <ReactPlayer
        url={`/video/cases/pwa/${ vid }`}
        playing={isPlaying}
        loop={true}
        width="375px"
        height="667px"
        playsinline={true}
        onReady={() => setIsReady(true)}
      />
    </div>
  )
}

Media.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  vid: PropTypes.string
}

export default Media
