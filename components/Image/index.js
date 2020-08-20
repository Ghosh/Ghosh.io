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

const Image = ({ base, name, alt, width, height, strat }) => {
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
        loading="lazy"
        src={`${ base }${ types.og }`}
        alt={alt}
        width={width}
        height={height}
      />
    </picture>
  )
}

Image.propTypes = {
  base: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  strat: PropTypes.string
}

Image.defaultProps = {
  strat: 'lazy'
}

export default Image
