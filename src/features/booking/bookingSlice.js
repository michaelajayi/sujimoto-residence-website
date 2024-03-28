import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../global/constants";
import toast from "react-hot-toast";

// import { fetchCount } from "./counterAPI";

const initialState = {
  booking: {
    propertyId: "",
    noOfChildren: 0,
    noOfAdults: 0,
    checkInDate: null,
    checkOutDate: null,
    phone: "",
    email: "",
  },
  loading: false,
  error: null,
};

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const bookPropertyAsync = createAsyncThunk(
  "booking/bookProperty",
  async (booking, onHide) => {
    try {
      const res = await axios.post(`${baseURL}/api/bookings`, booking);
      toast.success(res.data.msg);
      onHide();
      return res.data;
    } catch (err) {
      console.error(err.response.msg);
      return err.response.msg;
    }
  }
);
export const bookingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookPropertyAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(bookPropertyAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.booking = action.payload.booking;
      })
      .addCase(bookPropertyAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = bookingSlice.actions;

// export const selectCount = (state) => state.counter.value;

export const selectBooking = (state) => state.booking;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default bookingSlice.reducer;
