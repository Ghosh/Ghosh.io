import React from 'react'

import Box from '@core/Box'
import Text from '@core/Text'

const Hero = () => {
  return (
    <Box mt={[8, 9, 10]}>
      <Text
        fontSize={['24px', '28px', '30px', '38px']}
        fontWeight="600"
        as="h1"
        css="color: var(--text-primary)"
      >
        Hi, I am Indrashish!
      </Text>
      <Text
        fontSize={[2, 4]}
        fontWeight="300"
        lineHeight={1.5}
        mt={3}
        width={['100%', '100%', '75%', '60%', '60%']}
        css="color: var(--text-secondary)"
      >
        A Product Designer who enjoys designing and building experiences for the next billion users
      </Text>
    </Box>
  )
}

export default Hero
