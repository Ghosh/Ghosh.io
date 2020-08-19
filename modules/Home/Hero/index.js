import React from 'react'

import Text from '@stylekit/ui/Text'
import Spacer from '@stylekit/ui/Spacer'

const byline = [
  'A product designer who enjoys designing and building experiences for the next billion users',
  'A product design generalist specializing in design systems and progressive web apps.'
]

const Hero = () => {
  return (
    <>
      <Spacer mt={['70px', '80px', '80px', '80px', '100px']} />

      <Text fontSize={['18px', '24px', '30px']} m="0">
        <span role="img" aria-label="wave">
          👋
        </span>
      </Text>

      <Spacer mt={['3', '3', '4']} />

      <Text
        fontSize={['h600', 'h700', 'h800', 'h900']}
        fontWeight="500"
        fontFamily="sans"
        width={['100%', '95%', '90%', '85%', '80%']}
        lineHeight="1.4"
        m="0"
        css={`
          color: var(--text-1-color);
        `}
      >
        Hi, I am Indrashish Ghosh
      </Text>

      <Spacer my={['2', '2']} />

      <Text
        fontSize={['h600', 'h600', 'h700']}
        lineHeight={['2.9rem', '2.9rem', '4.2rem']}
        fontWeight="300"
        width={['100%', '90%', '75%', '60%', '53%']}
        m="0"
        css={`
          color: var(--text-2-color);
        `}
      >
        {byline[1]}
      </Text>

      <Spacer mb={['70px', 6, 6, 7]} />
    </>
  )
}

export default Hero
