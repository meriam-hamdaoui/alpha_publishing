import { createSlice } from "@reduxjs/toolkit";

const subscriberSlice = createSlice({
  name: "subscriber",
  initialState: [],
  reducers: {
    subscribeNow: (state, action) => [...state, ...action.payload],
  },
});

export const { subscribeNow } = subscriberSlice.actions;
export default subscriberSlice.reducer;
