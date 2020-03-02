import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@core/Box'
import Text from '@core/Text'

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  margin-right: 8px;
  background-color: var(--accent-1);
`

const Label = ({ children }) => {
  return (
    <Box display="flex" alignItems="center" mr="4">
      <Circle />
      <Text
        fontSize="0"
        css={`
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        `}
      >
        {children}
      </Text>
    </Box>
  )
}

Label.propTypes = {
  children: PropTypes.node
}

export default Label
