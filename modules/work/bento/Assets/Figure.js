import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Image from 'components/Image'
import Box from '@stylekit/ui/Box'
import { ThemeContext } from 'styled-components'

import Caption from 'components/Caption'

const Figure = ({ width, base, name, alt, cap }) => {
  const theme = useContext(ThemeContext)

  return (
    <Box
      maxWidth={width || theme.layout.mediaWidth}
      margin="auto"
      mt={[5]}
      mb={[5]}
    >
      <figure>
        <Image
          base={base}
          name={name}
          alt={alt}
          width="100%"
          height="auto"
        />
        <Caption>{cap}</Caption>
      </figure>
    </Box>
  )
}

Figure.propTypes = {
  width: PropTypes.string,
  base: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  cap: PropTypes.string
}

export default Figure
