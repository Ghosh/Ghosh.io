import React from 'react'
import PropTypes from 'prop-types'

const getParts = (name) => {
  const parts = name.split('.')

  const imgName = parts[0]
  const ext = parts[1]

  return {
    'og': `${ imgName }.${ ext }`,
    'ogRet': `${ imgName }@2x.${ ext }`,
    'webp': `${ imgName }.webp`,
    'webpRet': `${ imgName }@2x.webp`
  }
}

const Image = ({ base, name, alt }) => {
  const types = getParts(name)

  // return <img src={`${ base }${ types.og }`} alt={alt} />

  return (
    <picture>
      <source
        srcSet={`
          ${ base }${ types.webp } 1x,
          ${ base }${ types.webpRet } 2x
        `}
        type="image/webp"
      />
      <source
        srcSet={`
          ${ base }${ types.og } 1x,
          ${ base }${ types.ogRet } 2x
        `}
        type="image/png"
      />
      <img
        src={`${ base }${ types.og }`}
        alt={alt}
      />
    </picture>
  )
}

Image.propTypes = {
  base: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string
}

export default Image
