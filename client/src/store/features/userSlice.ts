import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
  isAuth: boolean;
  currentUser: string;
}

const initialState: IUserSlice = {
  isAuth: false,
  currentUser: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    }
  }
})

export const {setAuthState, setCurrentUser } = userSlice.actions
export default userSlice.reducer;