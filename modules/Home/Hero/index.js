import React from 'react'
import styled from 'styled-components'

import Text from '@stylekit/ui/Text'
import Spacer from '@stylekit/ui/Spacer'
import Flex from '@stylekit/ui/Flex'

const Grad = styled.span`
  background: var(--text-grad);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 8px;
  background-color: #28a433;
`

const byline = [
  'A product designer who enjoys designing and building experiences for the next billion users',
  'A product design generalist specializing in design systems and progressive web apps',
  'Welcome to my portfolio. As a designer, developer and maker - I love being involved in all stages of deriving solution',
  'Over the past 8 years, I have been privileged to have influenced design decisions that have impacted millions of users',
  'Thank you for visiting my portfolio. I am a product designer with 8 years of experience, who happens to code. Lately been focusing on Design Systems',
  'Two parts designer, one part developer. For the last 8 years I have contributed to the growth of billion dollar companies as well as small medium eterprises',
  'A product designer by trade, I have been crafting purpose-driven experiences for eight years. Recently my focus has been on building Design Systems at Cleartrip'
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
        fontSize={['h700', 'h800', '4rem', '5rem']}
        fontWeight="700"
        fontFamily="sans"
        width={['100%', '95%', '90%', '85%', '80%']}
        lineHeight="1.4"
        m="0"
        css={`
          color: var(--text-1-color);
        `}
      >
        Hi, I am <Grad>Indrashish Ghosh</Grad>
      </Text>

      <Spacer my={['2', '2']} />

      <Text
        fontSize={['h600', 'h700', '2.5rem']}
        lineHeight={['2.9rem', '3.4rem', '4.2rem']}
        fontWeight="300"
        width={['100%', '90%', '75%', '70%']}
        m="0"
        color="var(--text-2-color)"
      >
        {byline[6]}
      </Text>

      <Spacer my={['4']} />

      <Flex alignItems="center" display="none">
        <Circle />
        <Text
          fontSize="1.6rem"
          fontWeight="400"
          m="0"
          color="#28a433"
        >
          Actively searching for new opportunities
        </Text>
      </Flex>

      <Spacer mb={['70px', 6, 6, 7]} />
    </>
  )
}

export default Hero
