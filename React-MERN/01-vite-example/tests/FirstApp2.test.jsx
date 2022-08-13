import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => {
  const title = 'Hola a todos';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={ title }/>);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el mensaje "Hola a todos"', () => {
    render(<FirstApp title={ title }/>);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Debe mostrar el titulo en un h1', () => {
    render(<FirstApp title={ title }/>);
    expect(screen.getByRole('heading', { level:1 }).innerHTML).toContain(title);
  });
})