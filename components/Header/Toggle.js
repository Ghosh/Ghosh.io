import React from 'react'
import Flex from '@stylekit/ui/Flex'
import styled from 'styled-components'

import Moon from './svg/moon.svg'
import Sun from './svg/sun.svg'

const Area = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #eaeaea;
  }
`

const Toggle = () => {
  return (
    <Area>
      <Moon
        width="14"
        fill="#3366cc"
      />

      {false &&
        <Sun
          width="20"
          fill="#3366cc"
        />
      }
    </Area>
  )
}

export default Toggle
