import React from 'react'

import Master from 'layouts/Master'
import Header from 'components/Header'
import Wrapper from 'components/Wrapper'
import Hero from 'modules/Home/Hero'

const Home = () => {
  return (
    <Master>
      <Header />
      <Wrapper>
        <Hero />
      </Wrapper>
    </Master>
  )
}

export default Home
