import React from 'react'
import PropTypes from 'prop-types'

import Right from './svg/right.svg'
import Insta from './svg/instagram.svg'
import Github from './svg/github.svg'
import Twitter from './svg/twitter.svg'

const Icon = ({ label, ...props }) => {
  switch (label) {
    case 'right':
      return <Right {...props}/>

    case 'github':
      return <Github {...props} />

    case 'instagram':
      return <Insta {...props} />

    case 'twitter':
      return <Twitter {...props} />
  }
}

Icon.propTypes = {
  label: PropTypes.string
}

export default Icon
