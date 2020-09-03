import styled from 'styled-components'
import css from '@styled-system/css'

const Caption = styled.figcaption(props => ({
  maxWidth: props.theme.layout.mediaWidth,
  textAlign: 'center',
  fontStyle: 'italic',
  color: 'var(--text-3-color)'
}),
css({
  fontFamily: 'serif',
  fontSize: ['h400'],
  mt: [4]
}))

export default Caption
