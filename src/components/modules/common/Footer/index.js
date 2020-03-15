import React from 'react'
import styled from 'styled-components'

import Container from '@core/Container'
import Flex from '@core/Flex'
import Box from '@core/Box'
import Text from '@core/Text'
import Link from '@core/Link'

import Breakpoints from '@breakpoints'

import { ReactComponent as Wave } from './wave.svg'

const Waves = styled(Wave)`
  margin-bottom: -50px;
  fill: var(--bg-darker)
`

const Menu = styled.div`
  display: none;
  ${ Breakpoints.greaterThan('tabletP')`
    display: block
  ` };
`
const Footer = () => {
  return (
    <>
      <Container mb="160px">
        <Flex justifyContent="space-between">
          <Box>
            <Text
              fontSize={[2, 3, 4]}
              fontWeight="500"
              lineHeight={1.7}
              css="color: var(--text-primary)"
              mb="1"
            >
            Let&apos;s connect
            </Text>
            <Text
              fontSize={[1, 2, 3]}
              fontWeight="400"
              lineHeight={1.6}
              width={['100%', '90%', '60%']}
              css="color: var(--text-secondary)"
              mb="2"
            >
              {/* Feel free to reach out for any collaboration or just
            for a friendly hello */}
              I enjoy connecting with friendly folks who are passionate about what they do. Feel free to reach out for a collaboration or just a friendly hello
            </Text>
            <Text
              fontSize={[1, 2, 3]}
              fontWeight="400"
              lineHeight={1.6}
              width={['100%', '90%', '60%']}
              css="color: var(--text-secondary)"
              mb="6"
            >
              <Link href="/">mail@ghosh.io</Link>
            </Text>
            <Text
              fontSize={[1]}
              fontWeight="400"
              lineHeight={1.6}
              width={['100%', '90%', '60%']}
              css="color: var(--text-tertiary)"
            >
              Website made with Gatsby and hosted on Netlify
            </Text>
          </Box>

          <Menu>
            <Flex
              css="flex: 1; margin-top: 10px;"
              justifyContent="flex-end"
            >

              <Flex flexDirection="column" mr="9">
                <Link
                  href="/"
                  fontSize={[2]}
                  mb="5"
                >
              Home
                </Link>
                <Link
                  href="/"
                  fontSize={[2]}
                  mb="5"
                >
              About
                </Link>
                <Link
                  href="/"
                  fontSize={[2]}
                  mb="5"
                >
              Labs
                </Link>
                <Link
                  href="/"
                  fontSize={[2]}
                  mb="5"
                >
              Contact
                </Link>
              </Flex>

              <Flex flexDirection="column">
                <Link
                  href="/"
                  fontSize={[2]}
                  mb="5"
                >
              Twitter
                </Link>
                <Link
                  href="/"
                  fontSize={[2]}
                  mb="5"
                >
              Github
                </Link>
                <Link
                  href="/"
                  fontSize={[2]}
                  mb="5"
                >
              Instagram
                </Link>
                <Link
                  href="/"
                  fontSize={[2]}
                  mb="5"
                >
              Youtube?
                </Link>
              </Flex>
            </Flex>
          </Menu>
        </Flex>
      </Container>
      <Waves />
    </>
  )
}

export default Footer
