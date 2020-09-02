import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import Text from '@stylekit/ui/Text'

const Unordered = styled('ul')(
  {
    listStyleType: 'disc'
  },
  css({
    mb: [4],
    ml: [3]
  })
)

const List = ({ children }) => {
  return (
    <Unordered>
      {children}
    </Unordered>
  )
}

const ListItem = ({ children }) => {
  return (
    <Text
      as="li"
      fontSize={['h500', 'h600']}
      lineHeight="1.6"
      color="var(--text-2-color)"
      m="0"
      mb={[2]}
    >
      {children}
    </Text>
  )
}

List.Item = ListItem

List.propTypes = {
  children: PropTypes.node.isRequired
}

ListItem.propTypes = List.propTypes

export default List
