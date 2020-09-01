import React from 'react'
import Spacer from '@stylekit/ui/Spacer'

import Master from 'layouts/Master'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Wrapper from 'components/Wrapper'

import Hero from 'modules/Home/Hero'
import Featured from 'modules/Home/Featured'
import PWA from 'modules/Home/PWA'
import Past from 'modules/Home/Past'
import Sides from 'modules/Home/Sides'

const Home = () => {
  return (
    <Master>
      <Wrapper>
        <Header />
        <Hero />
      </Wrapper>
      <Featured />
      <Wrapper>
        <Spacer my={['8rem', '10rem', '16rem']} />
        <PWA />
        <Spacer my={['8rem', '10rem', '18rem']}/>
        <Past />
        <Spacer my={['8rem', '10rem', '18rem']} />
        <Sides />
      </Wrapper>
      <Spacer my={['14rem', '16rem', '24rem']} />
      <Footer />
    </Master>
  )
}

export default Home
