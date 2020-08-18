import React from 'react'

import Text from '@stylekit/ui/Text'
import Spacer from '@stylekit/ui/Spacer'

const Hero = () => {
  return (
    <>
      <Spacer mt={['70px', '80px', '100px']} />

      <Text fontSize={['24px', '30px']} m="0">
        <span role="img" aria-label="wave">
          👋
        </span>
      </Text>

      <Spacer mt={['3', '3', '4']} />

      <Text
        fontSize={['h700', 'h800', 'h900']}
        fontWeight="600"
        m="0"
        css={`
          color: var(--text-1-color);
        `}
      >
        Hi, I am Indrashish Ghosh
      </Text>

      <Spacer my={['2', '3']} />

      <Text
        fontSize={['h600', 'h600', 'h700']}
        lineHeight={['2.9rem', '2.9rem', '4.2rem']}
        fontWeight="400"
        width={['100%', '85%', '53%']}
        m="0"
        css={`
          color: var(--text-2-color);
        `}
      >
        I am a Product Designer who enjoys designing and building experiences
        for the next billion users
      </Text>

      <Spacer mb="7" />
    </>
  )
}

export default Hero
