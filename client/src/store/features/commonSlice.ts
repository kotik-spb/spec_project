import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICommonSlice {
  isLoading: boolean;
}

const initialState: ICommonSlice = {
  isLoading: false
}

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLoadingState (state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  }
})

export const {setLoadingState} = commonSlice.actions;
export default commonSlice.reducer;