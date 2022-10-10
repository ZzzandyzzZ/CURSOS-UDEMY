import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  const { isLoading, pokemons, page } = useSelector((state)=>state.pokemons)
  return (
    <>
      <h1>PokemonApp</h1>
      <span>Loading: {isLoading ? 'Si' : 'No'}</span>
      <hr />
      <ul>
        {
          pokemons.map(({name})=>(
            <li key={name}>{ name }</li>
          ))
        }
      </ul>
      <button disabled={isLoading} onClick={()=>{dispatch(getPokemons(page))}}>
        Next
      </button>
    </>
  )
}
