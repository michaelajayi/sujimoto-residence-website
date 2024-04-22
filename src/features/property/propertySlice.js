import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import carousels from "../../components/Properties/property-array";
import { baseURL } from "../../global/constants";
import { bookingSlice } from "../booking/bookingSlice";

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
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.error(err.response.msg);
    }
  }
);

export const saveContactForm = createAsyncThunk(
  "property/saveContactForm",
  async (payload) => {
    console.log(payload);
    try {
      const res = await axios.post(`${baseURL}/contact`, payload);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.error(err.response.msg);
      // return thunkAPI.rejectWithValue(err.response.data.msg);
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
