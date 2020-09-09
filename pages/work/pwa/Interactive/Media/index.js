import React from 'react'
import PropTypes from 'prop-types'

import Poster from './Poster'

const Media = ({ name, alt }) => {
  return <Poster name={name} alt={alt} />
}

Media.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string
}

export default Media
