import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

import Heading from './components/Heading'
import Para from './components/Para'
import List from './components/List'

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`

const components = {
  h2: Heading.H2,
  p: Para,
  ul: List,
  li: List.Item
}

const MDX = ({ children }) => {
  return (
    <Wrapper>
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </Wrapper>
  )
}

MDX.propTypes = {
  children: PropTypes.node.isRequired
}

export default MDX
