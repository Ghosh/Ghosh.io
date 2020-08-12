import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${ ({ theme }) => theme.colors.primary };
`

const Home = () => {
  return <Title>Welcome to Next.js!</Title>
}

export default Home
