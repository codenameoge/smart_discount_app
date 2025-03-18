import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  purchaseLink: '',
  recentPurchases: [
    { item: 'Amazon Purchase', saved: '$15.99', date: 'Jan 15' },
    { item: 'eBay Purchase', saved: '$8.50', date: 'Jan 12' },
    { item: 'Jumia Purchase', saved: '2000', date: 'Jan 09' },
  ],
  // Add other state variables as needed
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setPurchaseLink: (state, action) => {
      state.purchaseLink = action.payload;
    },
    // Add other reducers for state updates
  },
});

export const { setPurchaseLink } = homeSlice.actions;

export default homeSlice.reducer;