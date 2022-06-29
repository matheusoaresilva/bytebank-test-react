import React from 'react';
import { render, screen } from '@testing-library/react';
import Conta from './Conta'

describe('tests html', () => {
  it('names html', () => {
    render(<Conta />);

    expect(screen.getByText('Depósito')).toBeInTheDocument();
  })
})