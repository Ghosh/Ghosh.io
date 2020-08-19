import React from 'react'
import styled from 'styled-components'

import Flex from '@stylekit/ui/Flex'
import Box from '@stylekit/ui/Box'
import Text from '@stylekit/ui/Text'
import Stack from '@stylekit/ui/Stack'

import Wrapper from 'components/Wrapper'
import Icon from 'components/Icon'

import Waves from './wave.svg'

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Flex justifyContent="space-between" pb="6">
          <Box>
            <Stack gap="16px">
              <Text
                as="h4"
                fontWight="600"
                fontSize={['h600', 'h700']}
                m="0"
                color="var(--text-1-color)"
              >
                {'Let\'s connect'}
              </Text>
              <Text
                width={['100%', '100%', '55%']}
                fontSize={['h500', 'h600']}
                lineHeight="1.6"
                color="var(--text-2-color)"
                m="0"
              >
              I enjoy meeting friendly, passionate folks. Feel free to reach out for a collaboration or just a friendly chat
              </Text>

              <Link href="/">
                <Text
                  as="span"
                  fontSize={['h500', 'h600']}
                  color="var(--accent-1)"
                >
            Say hello
                </Text>
              </Link>
            </Stack>

            <Text
              fontSize={['h300', 'h400']}
              color="var(--text-3-color)"
              mt={4}
              lineHeight="1.6"
            >
            Created with love, sweat and lots of coffee - Colophon
            </Text>
          </Box>

          <Box display={['none', 'none', 'block']} mt={4}>
            <Stack gap="20px">
              <Link href="/">
                <Flex as="span">
                  <Icon
                    label="twitter"
                    width="14"
                    fill="var(--text-2-color)"
                  />
                  <Text
                    ml={2}
                    as="span"
                    color="var(--text-2-color)"
                  >
                    Twitter
                  </Text>
                </Flex>
              </Link>

              <Link href="/">
                <Flex as="span">
                  <Icon
                    label="github"
                    width="14"
                    fill="var(--text-2-color)"
                  />
                  <Text
                    ml={2}
                    as="span"
                    color="var(--text-2-color)"
                  >Github</Text>
                </Flex>
              </Link>

              <Link href="/">
                <Flex as="span">
                  <Icon
                    label="instagram"
                    width="16"
                    style={{ marginRight: '-2px' }}
                    fill="var(--text-2-color)"
                  />
                  <Text
                    ml={2}
                    as="span"
                    color="var(--text-2-color)"
                  >Instagram</Text>
                </Flex>
              </Link>
            </Stack>
          </Box>
        </Flex>
      </Wrapper>

      <Waves fill="var(--bg-1)"/>
    </>
  )
}

export default Footer
