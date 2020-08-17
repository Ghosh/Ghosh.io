import React from 'react'

import Text from '@stylekit/ui/Text'
import Spacer from '@stylekit/ui/Spacer'

const Hero = () => {
  return (
    <>
      <Spacer mt="100px" />

      <Text fontSize={['20px', '24px', '30px']}>
        <span role="img" aria-label="wave">👋</span>
      </Text>

      <Text
        as="h1"
        fontSize="h900"
        fontWeight="600"
        m="0"
      >
        Hi, I am Indrashish Ghosh
      </Text>

      <Spacer my="3" />

      <Text
        fontSize="h700"
        lineHeight="4.2rem"
        fontWeight="300"
        width={['100%', '85%', '53%']}
        m="0"
      >
        I am a Product Designer who enjoys designing and building experiences for the next billion users
      </Text>

      <Spacer mb="7" />
    </>
  )
}

export default Hero
