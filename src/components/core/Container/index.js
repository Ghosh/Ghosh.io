import styled from 'styled-components'

import Box from '@core/Box'
import Breakpoints from '@breakpoints'

// TODO: Investgate if Wrapper and Container can be the same component
// TODO: Add Stylelint
const Container = styled(Box)`
  max-width: ${ props => props.theme.maxWidth };
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;

  ${ Breakpoints.greaterThan('laptop')`
    padding: 0 32px;
  ` };

  ${ Breakpoints.greaterThan('desktop')`
    padding: 0;
  ` };
`

export default Container
