// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    name: null,
    progress: {},
    streak: 0,
    friends: [],
  },
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    setProgress(state, action) {
      state.progress = action.payload;
    },
    setStreak(state, action) {
      state.streak = action.payload;
    },
    setFriends(state, action) {
      state.friends = action.payload;
    },
  },
});

export const { setUser, setProgress, setStreak, setFriends } = userSlice.actions;
export default userSlice.reducer;
