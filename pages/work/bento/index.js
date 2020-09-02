import React from 'react'

import Master from 'layouts/Master'
import Wrapper from 'components/Wrapper'

import Hero from './Hero'
import MDX from './MDX'

import Content from './bento.mdx'

const Bento = () => {
  return (
    <Master>
      <Hero />
      <Wrapper>
        <MDX>
          <Content />
        </MDX>
      </Wrapper>
    </Master>
  )
}

export default Bento
