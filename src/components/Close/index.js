import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Input from '../Input';
import Button from '../Button';
import { FormContainer } from '../Open/styles'
import { AddButton, ButtonContainer } from './styles'
import { apiCall, centsToDollars } from '../../utils';
import Expense from '../Expense';


const Close = () => {
  const [data, setData] = useState({});
  const [totalInSales, setTotalInSales] = useState();
  const [totalBox, setTotalBox] = useState();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCall(`${process.env.URL_BASE}/has/open/cashier/balance`)
      .then(({close, card, value}) => {
        setData({expenses: [], close, card, value});
        setTotalInSales(parseInt(close) + parseInt(card));
        setTotalBox(parseInt(close) + parseInt(value));
        setTotal(parseInt(close) + parseInt(value));
        setLoading(false);
      })
      .catch((error) => console.error('Ocurrió un error obteniendo la información'))
  }, [])

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
    const expenses = data.expenses.filter((expense) => expense.name != "" && expense.value === 0);
    apiCall(`${process.env.URL_BASE}/cashier/balance/close/day`, 'POST', {...data, expenses})
      .then((response) => console.log(response))
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
    <>
    {!loading && (
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
        <Button disabled={total < 0} type="submit">Cerrar caja con {centsToDollars(total)}</Button>
      </ButtonContainer>
    </FormContainer>
    )}
    </>
  )
}

export default Close;