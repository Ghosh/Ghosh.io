import React from 'react'
import PropTypes from 'prop-types'
import Flex from '@stylekit/ui/Flex'

import Reel from './Reel'
import Media from './Media'

const Interactive = ({ poster, alt, fail, pass }) => {
  return (
    <Flex justifyContent="space-around" flexWrap="wrap">
      <Reel>
        <Media
          name={poster}
          alt={alt}
          vid={pass}
        />
      </Reel>
      <Reel>
        <Media
          name={poster}
          alt={alt}
          vid={fail}
        />
      </Reel>
    </Flex>
  )
}

Interactive.propTypes = {
  poster: PropTypes.string,
  alt: PropTypes.string,
  fail: PropTypes.string,
  pass: PropTypes.string
}

export default Interactive
