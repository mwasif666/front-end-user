import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    authToken: "",
    message: "",
    success: false,
    errors: "",
    msg: "",
    error: "",
  },
  reducers: {
    authentication: (state) => {
      state.authToken = localStorage.getItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      //  This is for Login
      .addCase(userLogin.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(
        userLogin.fulfilled,
        (state, { payload: { authToken, errors, message } }) => {
          state.loading = false;
          if (errors) {
            state.errors = errors;
          } else {
            state.message = message;
            state.success = true;
            state.authToken = authToken;
            localStorage.setItem("authToken", authToken);
          }
        }
      )
      .addCase(userLogin.rejected, (state) => {
        state.loading = true;
      })
      // This is for signup
      .addCase(userSignUp.pending, (state) => {
        state.loading = false;
      })
      .addCase(
        userSignUp.fulfilled,
        (state, { payload: { authToken, errors, message } }) => {
          state.loading = false;
          if (errors) {
            state.errors = errors;
          } else {
            state.message = message;
            state.success = true;
            state.authToken = authToken;
            localStorage.setItem("authToken", authToken);
          }
        }
      )
      .addCase(userSignUp.rejected, (state) => {
        state.loading = true;
      });
      
  },
});

export const { authentication } = authSlice.actions;

export default authSlice.reducer;

// we are fetcching api throught asyncthunk
export const userLogin = createAsyncThunk("users/login", async (userData) => {
  const res = await fetch("http://localhost:5000/api/auth/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return await res.json();
});

// This is for signup
export const userSignUp = createAsyncThunk("users/signup", async (userData) => {
  const res = await fetch("http://localhost:5000/api/auth/v1/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  let data  = await res.json();
  if(data.success){
    return data
  }
});


export const message = (state)=>state.auth.message