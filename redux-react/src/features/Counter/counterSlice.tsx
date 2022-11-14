import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.count += action.payload;
    }
  }
})



export const { increment, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;