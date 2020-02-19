import React from 'react'
import { Link } from 'gatsby'

import Layout from '@src/layouts/master'
import Container from '@comps/core/Container'
import Header from '@mods/common/Header'

const IndexPage = () => (
  <Layout title="Home">
    <Container>
      <Header />

      <Link to="/404/">Go to page 2</Link>
    </Container>
  </Layout>
)

export default IndexPage
