import React from 'react'

import Layout from '@src/layouts/master'
import Container from '@core/Container'
import Header from '@mods/common/Header'

import Hero from '@mods/home/Hero'
import Featured from '@mods/home/Featured'
import Gallery from '@mods/home/Gallery'

const IndexPage = () => (
  <Layout title="Home">
    <Container>
      <Header />
      <Hero />
    </Container>
    <Featured />
    <Gallery />
  </Layout>
)

export default IndexPage
