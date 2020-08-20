import React from 'react'
import styled from 'styled-components'
import Box from '@stylekit/ui/Box'

import Breakpoints from '@/breakpoints'
import Image from 'components/Image'

const Block = styled.div`
  display: none;
  grid-gap: 24px;
  grid-template-areas: "item-1";

  ${ Breakpoints.greaterThan('tabletL')`
    display: grid;
    grid-template-areas:
      "item-1  item-1 item-2 item-2 item-2"
      "item-3 item-3 item-3 item-4 item-4";
  ` };
`

const Item = styled(Box)`
  position: relative;
  background-color: var(--bg-2);
  border-radius: 4px;
  height: 244px;
  overflow: hidden;

  picture,
  img {
    position: absolute;
    transition: all .25s cubic-bezier(0,0,.2,1);
    backface-visibility: hidden;
    will-change: transform;
  }
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
`

const Item3 = styled(Item)`
  display: none;
  ${ Breakpoints.greaterThan('tabletP')`
    grid-area: item-3;
    display:block;
  ` };
`

const Item4 = styled(Item)`
  display: none;
  ${ Breakpoints.greaterThan('tabletP')`
    grid-area: item-4;
    display:block;
  ` };
`

const Parts = styled.div`
  ${ Breakpoints.greaterThan('tabletL')`
    display: none;
  ` };

  picture,
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

const Gallery = () => {
  return (
    <>
      <Parts>
        <Image
          base="/images/home/bento/"
          name="parts.png"
          alt="Bento system components"
          width="370px"
          height="244px"
        />
      </Parts>

      <Block>
        <Item1>
          <Image
            base="/images/home/bento/"
            name="tokens.png"
            alt="Representative image of bento tokens"
            width="370px"
            height="244px"
          />
        </Item1>
        <Item2>
          <Image
            base="/images/home/bento/"
            name="components.png"
            alt="Examples of Bento components"
            width="566px"
            height="244px"
          />
        </Item2>
        <Item3>
          <Image
            base="/images/home/bento/"
            name="utility.png"
            alt="css utility classes"
            width="566px"
            height="244px"
          />
        </Item3>
        <Item4>
          <Image
            base="/images/home/bento/"
            name="icons.png"
            alt="Image of the icon library"
            width="370px"
            height="244px"
          />
        </Item4>
      </Block>
    </>
  )
}

export default Gallery
