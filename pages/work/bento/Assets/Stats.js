import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'styled-components'
import Flex from '@stylekit/ui/Flex'
import Text from '@stylekit/ui/Text'

const Stat = ({ num, des }) => {
  return (
    <Flex
      width={['50%', '25%']}
      flexDirection="column"
      centered={true}
      my={3}
    >
      <Text
        fontSize={['h800']}
        fontWeight="600"
        mb={2}
        color="var(--text-1-color)"
      >
        {num}
      </Text>
      <Text
        fontSize={['h300', 'h400', 'h500']}
        mb={2}
        color="var(--text-2-color)"
      >
        {des}
      </Text>
    </Flex>
  )
}

const Stats = () => {
  const theme = useContext(ThemeContext)
  return (
    <Flex
      maxWidth={theme.layout.mediaWidth}
      flexWrap="wrap"
      margin="auto"
      mt={5}
      mb={5}
      justifyContent="space-between"
    >
      <Stat num={94} des="Text colours" />
      <Stat num={108} des="Background colors" />
      <Stat num={48} des="Font sizes" />
      <Stat num={16} des="Font families" />
    </Flex>
  )
}

Stat.propTypes = {
  num: PropTypes.number,
  des: PropTypes.string
}

export default Stats
