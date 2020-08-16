import React from 'react'

import Text from '@stylekit/ui/Text'

import Master from 'layouts/Master'
import Header from 'components/Header'
import Wrapper from 'components/Wrapper'

const Home = () => {
  return (
    <Master>
      <Header />
      <Wrapper>
        <Text
          as="h1"
          color="saddlebrown"
          fontSize="35px"
          fontWeight="600"
          m="0"
        >
          Home
        </Text>
      </Wrapper>
    </Master>
  )
}

export default Home
