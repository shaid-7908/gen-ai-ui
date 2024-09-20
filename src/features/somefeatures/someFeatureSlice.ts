import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SomeFeatureState {
  value: number;
}

const initialState: SomeFeatureState = {
  value: 0,
};

const someFeatureSlice = createSlice({
  name: "someFeature",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  someFeatureSlice.actions;
export default someFeatureSlice.reducer;
