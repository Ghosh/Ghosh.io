import React from 'react'

import Layout from '@src/layouts/master'
import Container from '@core/Container'
import Header from '@mods/common/Header'
import Hero from '@mods/home/Hero'

const IndexPage = () => (
  <Layout title="Home">
    <Container>
      <Header />
      <Hero />

    </Container>
  </Layout>
)

export default IndexPage
