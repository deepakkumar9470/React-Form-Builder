import { configureStore } from '@reduxjs/toolkit'
import formBuilderSlice from './formBuilderSlice'

export const store = configureStore({
  reducer: {
    form: formBuilderSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch