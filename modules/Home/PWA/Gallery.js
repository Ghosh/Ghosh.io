import React from 'react'
import styled from 'styled-components'
import Box from '@stylekit/ui/Box'

import Breakpoints from '@/breakpoints'

const Block = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-areas: "item-1";

  ${ Breakpoints.greaterThan('mobileL')`
    grid-template-areas:
      "item-1 item-2"
  ` };

  ${ Breakpoints.greaterThan('tabletP')`
    grid-template-areas:
      "item-1 item-1 item-2 item-2"
      "item-1 item-1 item-3 item-4";
  ` };
`

const Item = styled(Box)`
  background-color: var(--bg-2);
  border-radius: 4px;
  height: 188px;

  ${ Breakpoints.greaterThan('tabletP')`
    height: 400px;
  ` };
`

const Item1 = styled(Item)`
  grid-area: item-1;
`

const Item2 = styled(Item)`
  display: none;
  ${ Breakpoints.greaterThan('mobileL')`
    grid-area: item-2;
    display:block;
  ` };

  ${ Breakpoints.greaterThan('tabletP')`
    height: 188px;
  ` };

`

const Item3 = styled(Item)`
  display: none;
  ${ Breakpoints.greaterThan('tabletP')`
    grid-area: item-3;
    display:block;
    height: 188px;
  ` };
`

const Item4 = styled(Item)`
  display: none;
  ${ Breakpoints.greaterThan('tabletP')`
    grid-area: item-4;
    display:block;
    height: 188px;
  ` };
`

const Gallery = () => {
  return (
    <Block>
      <Item1>1</Item1>
      <Item2>2</Item2>
      <Item3>3</Item3>
      <Item4>4</Item4>
    </Block>
  )
}

export default Gallery
