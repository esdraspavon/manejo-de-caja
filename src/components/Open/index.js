import React, { useEffect, useState } from 'react'

import Input from '../Input';
import { FormContainer, Label, InputTextarea, ButtonContainer } from './styles';
import Button from '../Button';
import { apiCall } from '../../utils';

const Open = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    apiCall(`${process.env.URL_BASE}/cashier/balance`)
      .then(({results: {date_open, hour_open, value_previous_close, value_open, observation}}) =>
        setData({date_open, hour_open, value_previous_close, value_open, observation}))
      .catch((error) => console.error('Ocurrió un error obteniendo la información'))
  }, []) 

  const centsToDollars = (cents) => {
    return `$${(cents / 100.0).toFixed(2)}`;
  }

  const handleInputNumber = ({target}) => {
    let value = target.value.replace('$','').replace('.','');
    setData({...data, value_open: parseInt(value)})
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (data.value_open <= 0) return;
    apiCall(`${process.env.URL_BASE}/cashier/balance/open/day`, 'POST', data)
      .then((response) => console.log(response))
      .catch((error) => console.error('Ocurrió un error actualizando los datos'))
  }
  return (
      <FormContainer onSubmit={onSubmit}>
        <Input
          defaultValue={data.date_open}
          label="Fecha (yyyy/mm/dd)"
          disabled={true}
          />
        <Input
          defaultValue={data.hour_open}
          label="Hora (hh:mm)"
          disabled={true}
        />
        <Input
          defaultValue={data.value_previous_close}
          label="Total anterior"
          disabled={true}
        />
        <Input
          value={centsToDollars(data.value_open || 0)}
          onChange={handleInputNumber}
          label="Total inicial"
          disabled={data.value_open}
        />
        <Label>
          Observaciones
          <InputTextarea
           defaultValue={data.observation}
           label="Observaciones"
           rows={4}
           disabled={data.value_open}
          />
        </Label>
        {!data.value_open && 
          <ButtonContainer>
            <Button type="submit">Enviar</Button>
          </ButtonContainer>
        }
      </FormContainer>
  )
}

export default Open;
