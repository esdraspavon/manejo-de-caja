import React from 'react';
import {ButtonContainer} from './styles';

const Button = ({children, className}) => (<ButtonContainer className={className}>{children}</ButtonContainer>)

export default Button;