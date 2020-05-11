import React from 'react';
import { Blur, Loader } from './styles';

const Spinner = () => (
  <Blur>
    <Loader>Cargando...</Loader>
  </Blur>
);

export default Spinner;
