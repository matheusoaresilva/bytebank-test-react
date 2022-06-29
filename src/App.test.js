import React from 'react';
import { fireEvent, getAllByLabelText, render, screen } from '@testing-library/react';
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

  it('transition saque', () => {
     render(<App />);

    const saldo = screen.etByText('R$ 1000');
    const transacao = screen.getAllByLabelText('Saque');
    const valor = screen.getByTestId('valor');
    const botaoTransacao = screen.getByText('Realizar operação');

    expect(saldo.textContent).toBe('R$ 1000')

    fireEvent.click(transacao, { target: { value: 'saque'}});
    fireEvent.change(valor, { target: { value: 10}});
    fireEvent.click(botaoTransacao);

    expect(saldo.textContent).toBe('R$ 990');

  });

  // test
  it('raiz test', () => {
    const resultado = calculaRaiz(2)
    const resultadoB = calculaRaiz(4)

    expect(resultado).toBe(4);
    expect(resultadoB).toBe(16);
  })
});