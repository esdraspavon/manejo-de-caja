import React from 'react';
import { Wrapper } from './styles';

const Container = ({children, ...props}) => {
  return (
  <Wrapper {...props}>{children}</Wrapper>
  )
}

export default Container;
