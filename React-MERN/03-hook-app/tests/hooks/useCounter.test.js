const { renderHook } = require('@testing-library/react');
const { act } = require('react-dom/test-utils');
const { useCounter } = require('../../src/hooks/useCounter')

describe('Pruebas en useCounter', () => {
  test('Debe retornar los valores por defecto', () => {
    const { result } = renderHook(()=>useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  })
  test('Debe de generar el counter con valor de 100', () => {
    const { result } = renderHook(()=>useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  })
  test('Debe de incrementar el contador', () => {
    const { result } = renderHook(()=>useCounter(100));
    const { counter, increment } = result.current;
    act(()=>{
      increment(10);
    });
    expect(result.current.counter).toBe(110);
  })
})