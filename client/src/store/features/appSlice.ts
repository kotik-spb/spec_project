import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppSlice {
  isToastVisible: boolean;
  toastMessage: string;
  toastColor: string;
}

const initialState: IAppSlice = {
  isToastVisible: false,
  toastMessage: "",
  toastColor: ""
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToastVisibility: (state, action: PayloadAction<boolean>) => {
      state.isToastVisible = action.payload;
    },
    setToastMessage: (state, action: PayloadAction<string>) => {
      state.toastMessage = action.payload;
    },
    setToastColor: (state, action: PayloadAction<string>) => {
      state.toastColor = action.payload;
    },
  }
})

export const { setToastVisibility, setToastMessage, setToastColor } = appSlice.actions;
export default appSlice.reducer