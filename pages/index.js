import React from 'react'
import styled from 'styled-components'

import Master from 'layouts/Master'
import Header from 'components/Header'
import Wrapper from 'components/Wrapper'

const Title = styled.h1`
  font-size: 50px;
  color: papayawhip;
`

const Home = () => {
  return (
    <Master>
      <Header />
      <Wrapper>
        <Title>Home</Title>
      </Wrapper>
    </Master>
  )
}

export default Home
