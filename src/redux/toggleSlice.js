import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "modal",
  initialState: {
    showConnectModal: false,
    showBuyNowModal: false,
    userConnected: true
  },
  reducers: {
    openModal: state => {
      state.showConnectModal = true;
    },
    closeModal: state => {
      state.showConnectModal = false;
    },
    openConnectWalletModal: state => {
      state.showBuyNowModal = true;
    },
    closeConnectWalletModal: state => {
      state.showBuyNowModal = false;
    }
  }
});
export const { openModal, closeModal, openConnectWalletModal, closeConnectWalletModal } = toggleSlice.actions;
export default toggleSlice.reducer;
