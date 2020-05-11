import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Input from '../Input';
import Button from '../Button';
import Container from '../Container';
import { FormContainer } from '../Open/styles'
import { AddButton, ButtonContainer, SuccessMessage, ClosedMessage } from './styles'
import { apiCall, centsToDollars } from '../../utils';
import Expense from '../Expense';
import Spinner from '../Spinner';


const Close = ({toClose, setToClose}) => {
  const [data, setData] = useState({expenses: []});
  const [totalInSales, setTotalInSales] = useState();
  const [totalBox, setTotalBox] = useState();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();

  useEffect(() => {
    if(toClose) {
      setLoading(true);
      setData(({expenses: []}));
      setSuccess();
      apiCall(`${process.env.URL_BASE}/has/open/cashier/balance`)
      .then(({close, card, value}) => {
        console.log(close, card, value);
        setTotalInSales(parseInt(close) + parseInt(card));
        setTotalBox(parseInt(close) + parseInt(value));
        setTotal(parseInt(close) + parseInt(value));
        setData({expenses: [], close, card, value});
        setLoading(false);
      })
      .catch((error) => console.error('Ocurrió un error obteniendo la información: ', error))
    } else {
      setLoading(false)
    }
  }, [toClose]) 


  useEffect(() => {
    if(!data.expenses) setTotal(totalBox);
    else setTotal(data.expenses.reduce((acum, expense) => acum - expense.value, totalBox));
  }, [data.expenses]) 

  const addExpense = () => {
    const expenses = [...data.expenses || []] 
    expenses.push({name:"", value:0});
    setData({...data, expenses})
  }

  const onSubmit = () => {
    event.preventDefault();
    setLoading(true);
    const expenses = data.expenses.filter((expense) => expense.name != "" && expense.value === 0);
    apiCall(`${process.env.URL_BASE}/cashier/balance/close/day`, 'POST', {...data, expenses})
      .then((response) => {
        setToClose(false);
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => console.error('Ocurrió un error actualizando la caja'))
  }

  const handleRemove = (index) => {
    const expenses = [...data.expenses]
    expenses.splice(index, 1);
    setData({...data, expenses})
  }

  const handelExpenseChange = (expenseData, index) => {
    const expenses = [...data.expenses];
    expenses[index] = expenseData;
    setData({...data, expenses})
  }

  return (
    <Container>
      {toClose && loading && <Spinner />}
    {(toClose && data.value) ? (
    <FormContainer onSubmit={onSubmit}>
      <Input
        defaultValue={moment().format('YYYY/MM/DD')}
        label="Fecha (yyyy/mm/dd)"
        disabled={true}
        />
      <Input
        defaultValue={moment().format('HH:mm')}
        label="Hora (hh:mm)"
        disabled={true}
      />
      <Input
        defaultValue={centsToDollars(data.close)}
        label="Ventas en efectivo"
        disabled={true}
      />
      <Input
        defaultValue={centsToDollars(data.card)}
        label="Ventas por tarjeta"
        disabled={true}
      />
      <Input
        defaultValue={centsToDollars(totalInSales)}
        label="Total en ventas"
        disabled={true}
      />
      <Input
        defaultValue={centsToDollars(data.value)}
        label="Total apertura"
        disabled={true}
      />
      <Input
        defaultValue={centsToDollars(totalBox)}
        label="Total de caja"
        disabled={true}
      />
      <ButtonContainer>
          <AddButton type="button" onClick={addExpense}>Agregar gasto</AddButton>
      </ButtonContainer>
      {data.expenses.map((expense, index) => (
        <Expense
          key={index}
          setExpense={(expenseData) => handelExpenseChange(expenseData, index)} 
          remove={() => handleRemove(index)}
          {...expense}
        />
      ))}
      <ButtonContainer>
        <Button disabled={total < 0 || loading} type="submit">Cerrar caja con {centsToDollars(total)}</Button>
      </ButtonContainer>
    </FormContainer>
    ) : (
      <ClosedMessage>
        <svg viewBox="0 0 384 512" width={40}>
          <path fill="#aaa" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm108.6-251.3l6.5 104c.4 6.3 5.6 11.3 12 11.3h33.8c6.3 0 11.6-4.9 12-11.3l6.5-104c.4-6.9-5.1-12.7-12-12.7h-46.8c-6.9 0-12.4 5.8-12 12.7zM232 384c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z" />
        </svg>
        <p>No existe información para mostrar</p>
      </ClosedMessage>
    )}
    {success && <SuccessMessage>Información guardada exitosamente</SuccessMessage>}
    </Container>
  )
}

export default Close;