const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  pc: {
    cpu: {},
    motherboard: {},
    ram: {},
    psu: {},
    storage: {},
    monitor: {},
    others: {},
  },
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToPc: (state, action) => {
      const { category, product } = action.payload;
      state.pc[category] = product;
    },
    removeFromPc: (state, action) => {
      const { category } = action.payload;
      console.log(category);
      state.pc[category] = {};
    },
  },
});

export const { addToPc, removeFromPc } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
