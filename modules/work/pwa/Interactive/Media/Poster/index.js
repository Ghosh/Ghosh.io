import React from 'react'
import PropTypes from 'prop-types'
import Image from 'components/Image'

const Poster = ({ name, alt }) => {
  return (
    <Image
      base="/images/cases/pwa/"
      name={name}
      alt={alt}
      width="100%"
      height="auto"
    />
  )
}

Poster.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string
}

export default Poster
