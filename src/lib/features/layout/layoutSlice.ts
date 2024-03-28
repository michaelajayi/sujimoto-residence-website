import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

import { StaticImageData } from "next/image";
import defaultImage from "../../../../public/img/properties/ave-forsche-img.jpg";
import livingRoom from '../../../../public/img/landing-icons/living-room.svg';

interface LayoutState {
  activeIconGroup: {
    title: string;
  };
  activeBackground: StaticImageData | null;
  activeCarousel: {
    title: string;
  };
  activeHeaderMenu: {
    title: string;
    icon: StaticImageData | null;
    src: {
      type: "img" | "vid";
      data: StaticImageData | string | null;
    };
  };
}

const initialState: LayoutState = {
  activeIconGroup: {
    title: "",
  },
  activeBackground: defaultImage,
  activeCarousel: {
    title: "",
  },
  activeHeaderMenu: {
    title: "Italian Furnished Livingrooms",
    icon: livingRoom,
    src: {
      type: "vid",
      data: "https://res.cloudinary.com/michaelajayi/video/upload/v1711018446/sujimoto-residence-website-header-banners/r5wfkfxmhrtvw1ggdcsy.mp4",
    },
  },
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setActiveHeaderMenu: (state, action) => {
      state.activeHeaderMenu = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setActiveHeaderMenu } = layoutSlice.actions;

export const selectLayout = (state: RootState) => state.layout;

export default layoutSlice.reducer;
