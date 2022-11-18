import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: {
      id: 'ABC',
      title: '',
      date: 123,
      imageUrls: [],
    },
  },
  reducers: {
    a: (state) => {
      code
    },
  },
})

export const { increment } = journalSlice.actions