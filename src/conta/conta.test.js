import { fireEvent, render, screen } from '@testing-library/react'
import Conta from './Conta'
import React from 'react'

describe('components', () => {
  it('show account', () =>{
    render(<Conta saldo={1000} />)

    const saldo = screen.getByTestId('saldo-conta');


    expect(saldo.textContent).toBe('R$ 1000');
  })

  it('call function for transactions', () => {
    const transacting = jest.fn()

    render(<Conta saldo={1000} realizarTransacao={transacting}/>)

    fireEvent.click(screen.getByText('Realizar operação'));

    expect(transacting).toHaveBeenCalled();
  })
})