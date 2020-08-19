import React from 'react'

import Master from 'layouts/Master'
import Header from 'components/Header'
import Wrapper from 'components/Wrapper'

import Hero from 'modules/Home/Hero'
import Featured from 'modules/Home/Featured'
import PWA from 'modules/Home/PWA'
import Past from 'modules/Home/Past'

const Home = () => {
  return (
    <Master>
      <Header />
      <Wrapper>
        <Hero />
      </Wrapper>
      <Featured />
      <Wrapper>
        <PWA />
        <Past />
      </Wrapper>
    </Master>
  )
}

export default Home
