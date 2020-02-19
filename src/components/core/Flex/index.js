import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Flexbox = styled.div`
  display: ${ props => (props.inline ? 'inline-flex' : 'flex') };

  /* Row */
  ${ props =>
    props.row &&
    css`
      flex-direction: row;
    ` }

  /* Column */
  ${ props =>
    props.column &&
    css`
      flex-direction: column;
    ` }


  /* Row Reverse */
  ${ props =>
    props.rowReverse &&
    css`
      flex-direction: row-reverse;
    ` }


  /* Column Reverse */
  ${ props =>
    props.columnReverse &&
    css`
      flex-direction: column-reverse;
    ` }


  /* No Wrap */
  ${ props =>
    props.nowrap &&
    css`
      flex-wrap: nowrap;
    ` }


  /* Wrap */
  ${ props =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    ` }


  /* Wrap Reverse */
  ${ props =>
    props.wrapReverse &&
    css`
      flex-wrap: wrap-reverse;
    ` }


  /* Auto */
  ${ props =>
    props.auto &&
    css`
      flex: 1 1 auto;
    ` }

  /* One */
  ${ props =>
    props.one &&
    css`
      flex: 1 1 0%;
    ` }


  /* None */
  ${ props =>
    props.none &&
    css`
      flex: none;
    ` }


  /* No Shrink */
  ${ props =>
    props.noShrink &&
    css`
      flex-shrink: 0;
    ` }


  /* Strech */
  ${ props =>
    props.noShrink &&
    css`
      align-items: strech;
    ` }


  /* Top */
  ${ props =>
    props.top &&
    css`
      align-items: flex-start;
    ` }

  /* Middle */
  ${ props =>
    props.middle &&
    css`
      align-items: center;
    ` }

  /* Bottom */
  ${ props =>
    props.bottom &&
    css`
      align-items: flex-end;
    ` }


  /* Start */
  ${ props =>
    props.start &&
    css`
      justify-content: flex-start;
    ` }

  /* End */
  ${ props =>
    props.end &&
    css`
      justify-content: flex-end;
    ` }


  /* Center */
  ${ props =>
    props.center &&
    css`
      justify-content: center;
    ` }


  /* Between */
  ${ props =>
    props.between &&
    css`
      justify-content: space-between;
    ` }

  /* Around */
  ${ props =>
    props.around &&
    css`
      justify-content: space-around;
    ` }

`

const Flex = ({ children, ...rest }) => {
  return <Flexbox {...rest}>{children}</Flexbox>
}

Flex.propTypes = {
  children: PropTypes.node.isRequired
}

export default Flex
