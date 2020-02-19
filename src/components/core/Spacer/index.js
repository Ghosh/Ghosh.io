import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Space = styled.div`
  display: block;

  /* mt */
  ${ props =>
    props.mt && css`
      margin-top: ${ props.mt * 4 }px;
    ` }

  /* mb */
  ${ props =>
    props.mb && css`
      margin-bottom: ${ props.mb * 4 }px;
    ` }

  /* pt */
  ${ props =>
    props.pt && css`
      padding-top: ${ props.pt * 4 }px;
    ` }

  /* pb */
  ${ props =>
    props.pb && css`
      padding-bottom: ${ props.pb * 4 }px;
    ` }

`

const Spacer = ({ mt, mb, pt, pb }) => {
  return <Space mt={mt} mb={mb} pt={pt} pb={pb} />
}

Spacer.propTypes = {
  mt: PropTypes.number,
  mb: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number
}

Spacer.defaultProps = {
  mt: 0,
  mb: 0,
  pt: 0,
  pb: 0
}

export default Spacer
