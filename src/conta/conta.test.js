import { render, screen } from '@testing-library/react'
import Conta from './Conta'
import React from 'react'

describe('components', () => {
  it('show account', () =>{
    render(<Conta saldo={1000} />)

    const saldo = screen.getByTestId('saldo-conta');


    expect(saldo.textContent).toBe('R$ 1000');
  })
})