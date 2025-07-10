import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); //  save user
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("user"); //  remove from localStorage
    },
    updateUser: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
      localStorage.setItem("user", JSON.stringify(state.currentUser)); //  update saved user
    },
  },
});

export const { loginSuccess, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
