import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    // active: {
    //   id: 'ABC',
    //   title: '',
    //   date: 123,
    //   imageUrls: [],
    // },
  },
  reducers: {
    addNewEmptyNote: (state) => {

    },
    setActiveNote: (state, action) => {

    },
    setNotes: (state, action) => {

    },
    setSaving: (state, action) => {

    },
    updateNote: (state) => {

    },
    deleteNoteById: (state, action) => {

    }
  },
})

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions