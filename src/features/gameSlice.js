// src/features/gameSlice.js
import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    beads: [],
    score: 0,
    currentQuestion: null,
  },
  reducers: {
    initializeGame(state, action) {
      state.beads = action.payload.beads;
    },
    updateScore(state, action) {
      state.score += action.payload;
    },
    setCurrentQuestion(state, action) {
      state.currentQuestion = action.payload;
    },
  },
});

export const { initializeGame, updateScore, setCurrentQuestion } = gameSlice.actions;
export default gameSlice.reducer;
