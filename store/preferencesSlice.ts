import { createSlice } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: { preferences: [] as string[] },
  reducers: {
    updatePreferences(state, payload) {
      state.preferences = payload.payload as string[];
    },
  },
});

export const preferancesActions = preferencesSlice.actions;
export default preferencesSlice.reducer;
