import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';
import  { calculaRaiz } from './App';


describe('main component', () => {
  it('show bank name', () => {
    render(<App />);

    expect(screen.getByText('ByteBank')).toBeInTheDocument();
  });

  it('account balance', () => {
    render(<App />);

    expect(screen.getByText('Saldo:')).toBeInTheDocument();
  });
  it('show button', () => {
    render(<App />);

    expect(screen.getByText('Realizar operação')).toBeInTheDocument();
  });
});

describe('operations', () => {
  it('saque', () => {
    const valores ={
      transacao: 'saque',
      valor: 50
    }

    const novoSaldo = calcularNovoSaldo(valores, 150)

    expect(novoSaldo).toBe(100);
  });

  // test
  it('raiz test', () => {
    const resultado = calculaRaiz(2)
    const resultadoB = calculaRaiz(4)

    expect(resultado).toBe(4);
    expect(resultadoB).toBe(16);
  })
});