import axios from "axios";
import { setCategoryDatas, setCategoryCarouselDatas } from "../../Reducers/categoryDataReducer";

export const getCategoryDatas = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://localhost:3001/category_data",
    );

    dispatch(setCategoryDatas(response.data));
  };
};

export const getCategoryCarouselDatas = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://localhost:3001/category_carousel_data",
    );

    dispatch(setCategoryCarouselDatas(response.data));
  };
};