import React from 'react'

import Master from 'layouts/Master'
import Wrapper from 'components/Wrapper'

import Hero from './Hero'

import Content from './bento.mdx'

const Bento = () => {
  return (
    <Master>
      <Hero />
      <Wrapper>
        <Content />
      </Wrapper>
    </Master>
  )
}

export default Bento
