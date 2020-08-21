import React from 'react'
import styled from 'styled-components'
import Box from '@stylekit/ui/Box'
import Text from '@stylekit/ui/Text'

import Image from 'components/Image'

import Breakpoints from '@/breakpoints'

import Zomato from './svg/zomato.svg'
import Oyo from './svg/oyo.svg'

/**
 * @TODO: Fix bg color
 */

const Block = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    "item-1"
    "item-2"
    ;
`

const Item = styled(Box)`
  position: relative;
  background-color: var(--bg-2);
  border-radius: 4px;
  overflow: hidden;
  min-height: 400px;

  ${ Breakpoints.greaterThan('tabletP')`
    min-height: 240px;
  ` };

  picture,
  img {

    ${ Breakpoints.lessThan('tabletP')`
        top: 90px;
        left: 0;
        right: 0;
        margin: auto
    ` };

    ${ Breakpoints.greaterThan('tabletP')`
        top: 20px;
        right: 20px;
    ` };

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
  grid-area: item-2;

`

const Gallery = () => {
  return (
    <Block>
      <Item1 padding={['2.5rem', '2.5rem', '3rem', '5rem']}>
        <Zomato width="90px" fill="var(--text-1-color)"/>

        <Text
          fontSize={['h500', 'h600']}
          lineHeight="1.6"
          color="var(--text-2-color)"
          width={['100%', '100%', '40%', '40%']}
          m="0"
          mt={3}
        >
          My first stint in design. I designed and built the mobile web app and the brand pages of Zomato
        </Text>

        <Image
          base="/images/home/past/"
          name="zomato.png"
          alt="Samples of design of the Zomato website"
          width="436px"
          height="836px"
        />
      </Item1>

      <Item2 padding={['2.5rem', '2.5rem', '3rem', '5rem']}>
        <Oyo width="52px" fill="var(--text-1-color)" />

        <Text
          fontSize={['h500', 'h600']}
          lineHeight="1.6"
          color="var(--text-2-color)"
          width={['100%', '100%', '40%', '40%']}
          m="0"
          mt={3}
        >
          Worked with OYO to setup their first version of the website. At that time booking flow was of the most concern
        </Text>
        <Image
          base="/images/home/past/"
          name="oyo.png"
          alt="Samples of design of the Oyo website"
          width="444px"
          height="549px"
        />
      </Item2>
    </Block>
  )
}

export default Gallery
