import React from 'react';
import { Input, Label, Error } from './styles';

const InputText = (props) => {
  const { label, error, touched, ...values } = props;
  return (
    <Label>
      {label}
      <Input {...values} />
      {error && touched && <Error>{error}</Error>}
    </Label>
  );
};

export default InputText;
