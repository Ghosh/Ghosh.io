import React from 'react';

import { ReactComponent as Logo } from './icons/logo.svg'

import Flex from '../Flex'

const Header = () => {
  return (
    <Flex middle between>
      <Flex middle>
        <Logo />
        <p>Nav here</p>
      </Flex>

      <p>Twitter</p>
    </Flex>
  );
}

export default Header;