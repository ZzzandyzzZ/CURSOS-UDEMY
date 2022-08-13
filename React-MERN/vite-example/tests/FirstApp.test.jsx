import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => {
  test('Debe hacer match con el snapshot', () => {
    const title = 'Hola a todos';
    const { container } = render( <FirstApp title={ title }/> );
    expect( container ).toMatchSnapshot();
  });
  test('Debe mostrar el titulo en un h1 (no recomendado)', () => {
    const title = 'Hola a todos';
    const { container, getByText } = render( <FirstApp title={ title }/> );
    expect( getByText(title) ).toBeTruthy();
    const h1 = container.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).toContain(title);
  });
  test('Debe mostrar el titulo en un h1', () => {
    const title = 'Hola a todos';
    const { getByTestId } = render( <FirstApp title={ title }/> );
    expect(getByTestId('test-title')).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });
})