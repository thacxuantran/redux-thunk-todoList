// const initState = {
//   search: "",
//   status: "all",
//   priority: [],
// };

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchText":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/status":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filter/priority":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "all",
    priority: [],
  },
  reducers: {
    searchText: (state, action) => {
      state.search = action.payload;
    },
    priority: (state, action) => {
      state.priority = action.payload;
    },
    status: (state, action) => {
      state.status = action.payload;
    },
  },
});
