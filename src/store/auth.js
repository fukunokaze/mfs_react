import { createSlice, configureStore } from "@reduxjs/toolkit";

const authInitialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const store = configureStore({
//   reducer: { auth: authSlice.reducer },
// });   

export const authAction = authSlice.actions;

export default authSlice.reducer;