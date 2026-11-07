// import { createSlice } from '@reduxjs/toolkit'

// let userExist = JSON.parse(localStorage.getItem("user"))


// const initialState = {
//     user: userExist || null
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         register: (state, action) => {
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         },
//         logoutUser: (state, action) => {
//             return {
//                 ...state,
//                 user: null
//             }
//         },
//         getProfile: (state, action) => {
//             return {
//                 ...state,
//                 user: {
//                     ...state.user,
//                     ...action.payload
//                 }
//             }
//         }
//     }
// });

// export const { register, getProfile, logoutUser } = authSlice.actions

// export default authSlice.reducer



// const initialState ={
//     // user : { name : "hello"}
//     // user : { name : null}
// }

// const authSlice = createSlice({
//     name : "auth",
//     initialState,
//     reducers: { }
// })

// export const { } = authSlice.actions


// export default authSlice.reducer



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
