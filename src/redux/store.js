import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users/actions/userActions'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store
