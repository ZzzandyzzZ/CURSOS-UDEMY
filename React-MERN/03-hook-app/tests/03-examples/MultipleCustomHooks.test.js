import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';


jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')
describe('Pruebas en MultipleCustomHooks', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  beforeEach(()=>{
    jest.clearAllMocks();
  })
  test('Debe mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'))
    const nextButton = screen.getByRole('button',{name: 'Next quote'});
    expect(nextButton.disabled).toBeTruthy();
  })
  test('Debe mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{author:'Andy', quote:'Hola mundo'}],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Hola mundo'));
    expect(screen.getByText('Andy'));
    const nextButton = screen.getByRole('button',{name: 'Next quote'});
    expect(nextButton.disabled).not.toBeTruthy();
  })
  test('Debe llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{author:'Andy', quote:'Hola mundo'}],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button',{name: 'Next quote'});
    fireEvent.click(nextButton);

  })
})