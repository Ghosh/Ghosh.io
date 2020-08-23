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
    'webpRet': `${ imgName }@2x.webp`,
    'avif': `${ imgName }.avif`,
    'avifRet': `${ imgName }@2x.avif`
  }
}

/**
 * @TODO: Convert all images on hompage to JPEG and only export the parts required
 * @TODO: Allow passing extension for image as well
 * @TODO: Auto detect extension from the file name
 */
const Image = ({ base, name, alt, width, height, strat }) => {
  const types = getParts(name)

  return (
    <picture>
      <source
        srcSet={`
          ${ base }${ types.avif } 1x,
          ${ base }${ types.avifRet } 2x
        `}
        type="image/avif"
      />
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
