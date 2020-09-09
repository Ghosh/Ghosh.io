import React from 'react'
import PropTypes from 'prop-types'
import Flex from '@stylekit/ui/Flex'

import Reel from './Reel'
import Media from './Media'

const Interactive = ({ poster, alt }) => {
  return (
    <Flex justifyContent="space-around" flexWrap="wrap">
      <Reel>
        <Media
          name={poster}
          alt={alt}
        />
      </Reel>
      <Reel>
        <Media
          name={poster}
          alt={alt}
        />
      </Reel>
    </Flex>
  )
}

Interactive.propTypes = {
  poster: PropTypes.string,
  alt: PropTypes.string
}

export default Interactive
