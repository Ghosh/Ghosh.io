import React from 'react'

import Layout from '@src/layouts/master'
import Header from '@mods/common/Header'
import Footer from '@mods/common/Footer'

import Hero from '@mods/home/Hero'
import Featured from '@mods/home/Featured'
import Gallery from '@mods/home/Gallery'
import Sides from '@mods/home/Sides'

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Hero />
    <Featured />
    <Gallery />
    <Sides/>
    <Footer />
  </Layout>
)

export default IndexPage
