import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "Upto25",
  displayDrawer: true,
}

export const Drawer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
    toggleDrawer: (state, action) => {
      state.displayDrawer = action.payload
    },
  },
})

export const { setTitle, toggleDrawer } = Drawer.actions

export default Drawer.reducer