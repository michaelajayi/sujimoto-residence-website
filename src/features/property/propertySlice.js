import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../global/constants";
import { bookingSlice } from "../booking/bookingSlice";
import carousels from "../../components/Carousel/carousels";

const initialState = {
  property: {
    price: "",
    title: "",
    location: "",
    amenities: [],
    availability: "",
  },
  carousels: [],
  properties: [],
  loading: false,
  error: null,
  activeCarouselBg: carousels[0].img,
};

export const getPropertiesAsync = createAsyncThunk(
  "property/getProperties",
  async () => {
    try {
      const res = await axios.get(`${baseURL}/properties`);
      return res.data;
    } catch (err) {
      console.error(err.response.msg);
    }
  }
);

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      if (action.payload === "") {
        state.property = {
          price: "",
          title: "",
          location: "",
          amenities: [],
          availability: "",
        };
      } else {
        state.property = state.properties.filter((property) => {
          return property._id === action.payload;
        });
        state.property = state.property[0];
      }
    },
    setCarousels: (state, action) => {
      state.carousels = action.payload;
    },
    setActiveCarouselBg: (state, action) => {
      state.activeCarouselBg = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPropertiesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPropertiesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
      });
  },
});

export const { setCurrent, setCarousels, setActiveCarouselBg } =
  propertySlice.actions;

export const selectProperty = (state) => state.property;

export default propertySlice.reducer;
