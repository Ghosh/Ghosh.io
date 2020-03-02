import React from 'react'
import styled from 'styled-components'

import Container from '@core/Container'
import Box from '@core/Box'

import Breakpoints from '@breakpoints'

const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    "item-1 item-1 item-2 item-2"
    "item-1 item-1 item-3 item-4"

  /* ${ Breakpoints.greaterThan('tabletP')`
      padding-top: 24px;
  ` }; */
`

const Item = styled(Box)`
  background-color: var(--bg-darker);
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

const Item1 = styled(Item)`
  grid-area: item-1;
  height: 400px;
`

const Item2 = styled(Item)`
  grid-area: item-2;
`

const Item3 = styled(Item)`
  grid-area: item-3;
`

const Item4 = styled(Item)`
  grid-area: item-4;
`

const Gallery = () => {
  return (
    <Container>
      <Wrapper>
        <Item1>
          1
        </Item1>
        <Item2>
          2
        </Item2>
        <Item3>
          3
        </Item3>
        <Item4>
          4
        </Item4>
      </Wrapper>
    </Container>
  )
}

export default Gallery
