import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthSlice {
  isAuth: boolean;
  isActivated: boolean;
  isLoading: boolean;
}

const initialState: IAuthSlice = {
  isAuth: false,
  isActivated: false,
  isLoading: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setActivatedState: (state, action: PayloadAction<boolean>) => {
      state.isActivated = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
})

export const {setAuthState, setActivatedState, setLoadingState } = authSlice.actions
export default authSlice.reducer;