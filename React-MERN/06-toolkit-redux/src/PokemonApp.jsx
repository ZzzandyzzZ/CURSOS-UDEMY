import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons())
  
    return () => {
      
    }
  }, [])
  
  return (
    <>
      <h1>PokemonApp</h1>
      <ul>
        <li>hola</li>
      </ul>
    </>
  )
}
