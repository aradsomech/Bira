import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkThemeState {
  darkTheme: boolean;
}

const initialTheme: string = "light";

const initialState: DarkThemeState = {
  darkTheme: initialTheme === "dark",
};

const darkTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      console.log(state);
      state.darkTheme = !state.darkTheme;

      localStorage.setItem(`theme`, state.darkTheme ? "dark" : "light");
    },
  },
});

// Export the set functions for the components to make use of the actions
export const darkThemeActions = darkTheme.actions;

// In the reducer, we have all the necessary data to connect with the big pie
const darkThemeReducer = darkTheme.reducer;
export default darkThemeReducer;
