import { IUser } from './../../types/user';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
  currentUser: IUser;
}

const initialState: IUserSlice = {
  currentUser: {} as IUser
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    }
  }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;