import React from 'react'
import Spacer from '@stylekit/ui/Spacer'

import Master from 'layouts/Master'
import Wrapper from 'components/Wrapper'
import Footer from 'components/Footer'
import MDX from 'components/MDX'

import Hero from 'modules/work/bento/Hero'
import Content from 'modules/work/bento/bento.mdx'

/**
 * @TODO: Add Bento meta tags React Helmet
 * @TODO: Add product shots made with bento
 */
const Bento = () => {
  return (
    <Master>
      <Hero />
      <Wrapper>
        <Spacer mb={5} />
        <MDX>
          <Content />
        </MDX>
      </Wrapper>
      <Spacer mb={8} />
      <Footer />
    </Master>
  )
}

export default Bento
