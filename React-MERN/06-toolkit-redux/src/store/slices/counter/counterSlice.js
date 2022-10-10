import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
  name: 'Andy',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action) => {
      console.log(action)
      state.counter += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
