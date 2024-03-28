import { useReducer } from "react";
import bg01 from "../../assets/img/banner/03.jpg";
import {
  SET_ACTIVE_BACKGROUND,
  SET_ACTIVE_ICONGROUP,
  SET_ACTIVE_CAROUSEL,
} from "../types";
import LayoutContext from "./layoutContext";
import LayoutReducer from "./layoutReducer";

const LayoutState = (props) => {
  const initialState = {
    activeIconGroup: {
      title: "Italian Furnished Livingrooms",
    },
    activeBackground: bg01,
    activeCarousel: {
      title: "March",
    },
  };

  const [state, dispatch] = useReducer(LayoutReducer, initialState);

  const setActiveIconGroup = (iconGroup) => {
    dispatch({
      type: SET_ACTIVE_ICONGROUP,
      payload: iconGroup,
    });
  };

  const setActiveBackground = (currentBanner) => {
    dispatch({
      type: SET_ACTIVE_BACKGROUND,
      payload: currentBanner,
    });
  };

  const setActiveCarousel = (currentCarousel) => {
    dispatch({
      type: SET_ACTIVE_CAROUSEL,
      payload: currentCarousel,
    });
  };

  return (
    <LayoutContext.Provider
      value={{
        activeIconGroup: state.activeIconGroup,
        activeBackground: state.activeBackground,
        activeCarousel: state.activeCarousel,
        setActiveIconGroup,
        setActiveBackground,
        setActiveCarousel,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutState;
