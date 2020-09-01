import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from 'components/Wrapper'

import Box from '@stylekit/ui/Box'

const Hero = ({ children, header }) => {
  return (
    <Box
      height="640px"
      bg="var(--bg-2)"
    >
      <Wrapper>
        {header}
        {children}
      </Wrapper>
    </Box>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired
}

export default Hero
