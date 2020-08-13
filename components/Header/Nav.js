/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

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
const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`

const Nav = () => {
  return (
    <List>
      <Item>
        <Link href="/">
          <Anchor>Home</Anchor>
        </Link>
      </Item>

      <Item>
        Lab
      </Item>

      <Item>
        About
      </Item>

      <Item>
        Contact
      </Item>
    </List>
  )
}

export default Nav
