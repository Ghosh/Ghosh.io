import React from 'react'
import styled from 'styled-components'

import Container from '@core/Container'
import Flex from '@core/Flex'
import Box from '@core/Box'
import Text from '@core/Text'
import Link from '@core/Link'

const Footer = () => {
  return (
    <Container mb="300px">
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
            Feel free to reach out for any collaboration or just for a friendly hello
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
            Created with love, sweat and loads of coffee
          </Text>
        </Box>

        <Flex>

          <Flex flexDirection="column" mr="8">
            <Link
              href="/"
              fontSize={[2]}
              mb="3"
            >
              Home
            </Link>
            <Link
              href="/"
              fontSize={[2]}
              mb="3"
            >
              About
            </Link>
            <Link
              href="/"
              fontSize={[2]}
              mb="3"
            >
              Labs
            </Link>
            <Link
              href="/"
              fontSize={[2]}
              mb="3"
            >
              Contact
            </Link>
          </Flex>

          <Flex flexDirection="column" mr="8">
            <Link
              href="/"
              fontSize={[2]}
              mb="3"
            >
              Twitter
            </Link>
            <Link
              href="/"
              fontSize={[2]}
              mb="3"
            >
              Github
            </Link>
            <Link
              href="/"
              fontSize={[2]}
              mb="3"
            >
              Instagram
            </Link>
            <Link
              href="/"
              fontSize={[2]}
              mb="3"
            >
              Youtube?
            </Link>
          </Flex>

        </Flex>
      </Flex>
    </Container>
  )
}

export default Footer
