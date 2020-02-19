import React from "react"
import { Link } from "gatsby"

import Layout from "@src/layouts/master"
import Image from "@comps/image"

import Container from "@comps/core/Container"
import Header from "@comps/core/Header"
import Flex from "@comps/core/Flex"

const IndexPage = () => (
  <Layout title="Home">
    <Container>
    <Header />
    <h1>Hi people</h1>
    <Flex row>
        <p>Welcome.</p>
        <p>You.</p>
    </Flex>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/404/">Go to page 2</Link>
    </Container>
  </Layout>
)

export default IndexPage
