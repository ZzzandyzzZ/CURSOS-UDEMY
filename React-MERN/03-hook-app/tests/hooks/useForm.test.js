import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en useForm', () => {
  const initialForm ={
    name: 'Andy',
    email: 'andy@gmail.com'
  }
  test('Debe regresar los valores por defecto', () => {
    const { result } = renderHook(()=>useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  })
  test('Debe de cambiar el nombre del formulario', async () => {
    const newName = 'andy';
    const { result } = renderHook(()=>useForm(initialForm));
    const {name, onInputChange} = result.current;
    act(()=>{
      onInputChange({
        target:{
          name:'name',
          value:newName
        }
      });
    })
    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  })
})