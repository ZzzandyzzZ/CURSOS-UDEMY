import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemon: (state) => {
      console.log('state',state)
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }
  },
})

export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions