import { ADD_SCORE, REMOVE_SCORE, SET_EMAIL } from '../userTypes'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



const BASE_ENDPOINT = `https://project-x-g8rg.onrender.com/api/user`
// const BASE_ENDPOINT = `http://localhost:8000/api/user`
// const BASE_ENDPOINT = `https://projectx-f5wv.onrender.com/api/user`


const initialState = {
  user: null,
  error: null,
  registerStatus: 'idle',
  loginStatus: 'idle',
  resetPasswordStatus: 'idle',
  userEmail: '',
  userFirstName: '',
  userLastName: '',
  score: 0,
  isEmployer: false,
  isIntern: false,
}

export const loginUser = createAsyncThunk(
  'user/login',
  async (payload, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        BASE_ENDPOINT + '/login',
        {
          email: payload.email,
          password: payload.password,
        },
        config
      )

      if (res.status && res.status === 200) {
        localStorage.setItem('token', res.data['token'])

        return res.data
      } else {
        return rejectWithValue(res)
      }
    } catch (err) {
      // console.log(err, 'error');
      localStorage.removeItem('token')
      return rejectWithValue(err.response.data)
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  async (payload, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        BASE_ENDPOINT + '/register',
        {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
          country: payload.country,
          isEmployer: payload.isEmployer,
        },
        config
      )

      if (res.status && res.status === 201) {
        console.log(res.data)
        localStorage.setItem('verified', res.data.user.isVerified)
        localStorage.setItem('verify-email', res.data.user.email)
        localStorage.setItem(
          'name',
          res.data.user.firstName + ' ' + res.data.user.lastName
        )
        return res.data
      } else {
        return rejectWithValue(res)
      }
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const resetPassword = createAsyncThunk(
  'user/forgotpassword',
  async (payload, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        BASE_ENDPOINT + '/forgotpassword',
        {
          email: payload.email,
        },
        config
      )

      if (res.status && res.status === 200) {
        return res.data
      } else {
        return rejectWithValue(res)
      }
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getUser = createAsyncThunk(
  'user/get',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    try {
      const res = await axios.get(
        `${BASE_ENDPOINT}/me`
        // , {
        // 	headers: {
        // 		accept: 'application/json',
        // 		Authorization: `Bearer ${token}`,
        // 	},
        // }
      )

      if (res.status && res.status === 200) {
        return res.data
      } else {
        localStorage.removeItem('token')
        return rejectWithValue(res)
      }
    } catch (err) {
      // console.log(err.message, 'erorr');
      return rejectWithValue(err.response.data)
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.loginStatus = 'idle'
    },
    setEmail: (state, action) => {
      state.userEmail = action.payload
    },
    addScore: (state, action) => {
      state.score += action.payload
    },
    removeScore: (state, action) => {
      state.score -= action.payload
    },
    isEmployer: (state, action) => {
      state.isEmployer = action.payload
    },
    isIntern: (state, action) => {
      state.isIntern = action.payload
    },
    firstName: (state, action) => {
      state.isIntern = action.payload
    },
    lastName: (state, action) => {
      state.isIntern = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = 'success'
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = 'failed'
        state.error = action.payload
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = 'failed'
        state.error = action.payload
      })
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = 'loading'
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStatus = 'success'
        state.user = action.payload
      })

      .addCase(resetPassword.rejected, (state, action) => {
        state.resetPasswordStatus = 'failed'
        state.error = action.payload
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.resetPasswordStatus = 'loading'
        state.error = action.payload
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.resetPasswordStatus = 'success'
        state.error = action.payload
      })
  },
})

export const {
  logout,
  setEmail,
  addScore,
  removeScore,
  isEmployer,
  isIntern,
  firstName,
  lastname,
} = userSlice.actions

export default userSlice.reducer
