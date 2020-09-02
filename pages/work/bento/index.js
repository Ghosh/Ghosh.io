import React from 'react'

import Master from 'layouts/Master'
import Wrapper from 'components/Wrapper'
import MDX from 'components/MDX'

import Hero from './Hero'

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
