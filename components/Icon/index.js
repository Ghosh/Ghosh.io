import React from 'react'
import PropTypes from 'prop-types'

import Right from './svg/right.svg'

const Icon = ({ label, ...props }) => {
  switch (label) {
    case 'right':
      return <Right {...props}/>
  }
}

Icon.propTypes = {
  label: PropTypes.string
}

export default Icon
