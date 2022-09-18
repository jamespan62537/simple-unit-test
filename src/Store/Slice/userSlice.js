import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    userName: "",
  },
  reducers: {
    setIsLoginAction(state, action) {
      state.isLogin = action.payload;
    },

    setUserNameAction(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { setIsLoginAction, setUserNameAction } = userSlice.actions;
export default userSlice.reducer;
