import axios from "axios";
import { setBlogDatas } from "../../Reducers/blogDataReducer";

export const getBlogDatas = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://localhost:3001/blog_main_data",
    );

    dispatch(setBlogDatas(response.data));
  };
};
