import React from 'react'
import styled from 'styled-components'
import Box from '@stylekit/ui/Box'

import Breakpoints from '@/breakpoints'

const Block = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    "item-1"
    "item-2"
    "item-3";

  ${ Breakpoints.greaterThan('tabletP')`
    grid-template-areas: "item-1 item-2 item-3";
  ` }
`

const Item = styled(Box)`
  background-color: var(--bg-2);
  border-radius: 4px;
  height: 188px;

  ${ Breakpoints.greaterThan('tabletP')`
      min-height: 400px;
  ` };
`

const Item1 = styled(Item)`
  grid-area: item-1;
`

const Item2 = styled(Item)`
  grid-area: item-2;
`

const Item3 = styled(Item)`
  grid-area: item-3;
`

const Gallery = () => {
  return (
    <Block>
      <Item1>1</Item1>
      <Item2>2</Item2>
      <Item3>3</Item3>
    </Block>
  )
}

export default Gallery
