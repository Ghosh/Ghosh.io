import React from 'react'
import styled from 'styled-components'
import Stack from '@stylekit/ui/Stack'

import Master from 'layouts/Master'
import Header from 'components/Header'

const Title = styled.h1`
  font-size: 50px;
  margin: 8px;
  color: papayawhip;
`

const Home = () => {
  return (
    <Master>
      <Header />
      <Stack gap="40px">
        <Title>Welcome to Next.js!</Title>
        <Title>Welcome to Next.js!</Title>
      </Stack>
    </Master>
  )
}

export default Home
