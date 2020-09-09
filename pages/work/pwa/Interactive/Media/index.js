import React from 'react'
import PropTypes from 'prop-types'

import Overlay from './Overaly'
import Poster from './Poster'

const Media = ({ name, alt }) => {
  return (
    <>
      <Overlay />
      <Poster name={name} alt={alt} />
    </>
  )
}

Media.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string
}

export default Media
