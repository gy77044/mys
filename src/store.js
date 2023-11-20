import { configureStore } from '@reduxjs/toolkit'
import Drawer from './features/Drawer'
export const store = configureStore({
  reducer: {
    drawer: Drawer
  },
})