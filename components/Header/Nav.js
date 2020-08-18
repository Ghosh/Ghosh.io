/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Text from '@stylekit/ui/Text'

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-left: 60px;
`

const Item = styled.li`
  display: inline-block;
  margin-right: 28px;

  &:last-child{
    margin-right: 0;
  }
`
/**
 * @TODO: Add path to all links
 * @TODO: Add hover and active states
 */

const Anchor = styled(Text)`
  font-size: ${ props => props.theme.fontSizes.h500 };
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

const Nav = () => {
  return (
    <List>
      <Item>
        <Link href="/">
          <Anchor as="a">
            Home
          </Anchor>
        </Link>
      </Item>

      <Item>
        <Link href="/">
          <Anchor as="a">
            Lab
          </Anchor>
        </Link>
      </Item>

      <Item>
        <Link href="/">
          <Anchor as="a">
            About
          </Anchor>
        </Link>
      </Item>

      <Item>
        <Link href="/">
          <Anchor as="a">
            Contact
          </Anchor>
        </Link>
      </Item>
    </List>
  )
}

export default Nav
