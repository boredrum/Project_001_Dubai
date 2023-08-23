import axios from "axios";
import { setMainProjSlidesDatas } from "../../Reducers/mainDataReducer";

export const getMainProjSlidesDatas = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://localhost:3001/main_slides_proj_data",
    );

    dispatch(setMainProjSlidesDatas(response.data));
  };
};