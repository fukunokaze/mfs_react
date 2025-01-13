import { createSlice, configureStore } from "@reduxjs/toolkit";
import { RootState } from ".";

// const authInitialState = {
//     isAuthenticated: false,
// };

export interface LoginState {
    isAuthenticated: boolean
}

const initialLoginState: LoginState = {
    isAuthenticated : false
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialLoginState,
    reducers: {
        login : state => {
            state.isAuthenticated = true;
        },
        logout : state => {
            state.isAuthenticated = false;
        },
    },
});

// const store = configureStore({
//   reducer: { auth: authSlice.reducer },
// });   

export const authAction = authSlice.actions;

export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated

export default authSlice.reducer;