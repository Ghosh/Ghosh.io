import React from 'react'

import Box from '@stylekit/ui/Box'
import Flex from '@stylekit/ui/Flex'
import Text from '@stylekit/ui/Text'
import Spacer from '@stylekit/ui/Spacer'

import Wrapper from 'components/Wrapper'
import Icon from 'components/Icon'

import Subheader from './Subheader'
import Gallery from './Gallery'

import Cleartrip from './svg/cleartrip.svg'

/**
 * @BUG: as="h2" styles text differently
 */
const Featured = () => {
  return (
    <>
      <Subheader />
      <Box
        py={[4, 4, 4, 5, 6]}
        bg="var(--bg-1)"
        css={`
          border-top: solid 1px var(--border-1);
          border-bottom: solid 1px var(--border-1);
        `}
      >
        <Wrapper>
          <Text
            as="h2"
            fontWight="400"
            fontSize={['h600', 'h700', 'h800']}
            lineHeight="1.4"
            m="0"
            color="var(--text-1-color)"
          >
            Establishing a design system for Cleartrip
          </Text>

          <Spacer mt={[3, 4]}/>
          <Gallery />
          <Spacer mb={[3, 4]} />

          <Flex justifyContent="space-between">
            <Box width={['100%', '100%', '60%']}>
              <Text
                fontSize={['h500', 'h600']}
                lineHeight="1.6"
                color="var(--text-2-color)"
                m="0"
              >
                We identified the need of and then applied a design system in all of Cleartrip verticals
              </Text>
              <Spacer mb={[3]} />
              <Flex alignItems="center">
                <Text
                  fontSize={['h400', 'h500']}
                  color="var(--accent-1)"
                  m="0"
                >
                  Read case study
                </Text>
                <Box mt="6px" ml="6px">
                  <Icon
                    label="right"
                    width="20px"
                    stroke="var(--accent-1)"
                  />
                </Box>
              </Flex>
            </Box>

            <Box display={['none', 'none', 'block']}>
              <Cleartrip width="100px" />
            </Box>
          </Flex>

        </Wrapper>
      </Box>
    </>
  )
}

export default Featured
