import { fireEvent, render, screen } from '@testing-library/react';

import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {
  const initialValue = 10;

  test('<CounterApp/> debe coindicir con su snapshot', () => {
    render(<CounterApp value={ initialValue }/>);
    expect(screen).toMatchSnapshot();
  });

  test('Debe de mostrar el valor inicial de 100 <CounterApp value=100/>', () => {
    render(<CounterApp value={100}/>);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test('Debe incrementar con el boton +1', () => {
    render(<CounterApp value={ initialValue }/>);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test('Debe decrementar con el boton -1', () => {
    render(<CounterApp value={ initialValue }/>);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

});