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
  color: var(--text-2-color);
  &:hover {
    cursor: pointer;
    color: var(--text-1-color);
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
        <Link href="/">
          <Anchor>Lab</Anchor>
        </Link>
      </Item>

      <Item>
        <Link href="/">
          <Anchor>About</Anchor>
        </Link>
      </Item>

      <Item>
        <Link href="/">
          <Anchor>Contact</Anchor>
        </Link>
      </Item>
    </List>
  )
}

export default Nav
