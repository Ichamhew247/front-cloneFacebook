import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { removeAccessToken, setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};
export const registerAsync = createAsyncThunk(
  "auth/registerSync",
  async (input, thunkApi) => {
    try {
      const res = await authService.register(input);
      //   console.log(res);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authService.fetchMe();
      return resFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (input, thunkApi) => {
  try {
    const res = await authService.login(input);
    setAccessToken(res.data.accessToken);
    const resFetchMe = await authService.fetchMe();
    return resFetchMe.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
  try {
    const res = await authService.fetchMe();
    return res.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  removeAccessToken();
});

// createAsyncThunk make
// auth/registerAsync/pending
// auth/registerAsync/rejected
// auth/registerAsync/fulfilled
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })

      .addCase(fetchMe.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.initialLoading = false;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      }),
});

export default authSlice.reducer;

//ห้ามลบ ข้างล่างคือ หลักการทำงานเบื้องหลัง
//action object {type:"register"}
//action creator
// register => () => ({type:"register"})

//action => dispatch => reducer => new state => update UI
//1. {type:"register"} => dispatch({type:"auth/register"})

//2. const register = () => ({type:"auth/register"})
// dispatch(register())
// const login = (payload) => ({ type: "auth/login", payload:payload });
//dispatch({type:"auth/login", payload:{email:"a@gmail.com"}})
//dispatch(login({email:"a@gmail.com"}))

//เรามักจะเขียนแบบนี้ dispatch(register()) แต่หลักการทำงานแบบเดียวกันกับ dispatch({type:"auth/register"})

// function reducer(state, action) {
//   switch ((action, type)) {
//     case "auth/register": {
//       state.isAuthenticated = true;
//     }
//     case "auth/login": {
//       state.isAuthenticated = true;
//     }
//   }
// }
