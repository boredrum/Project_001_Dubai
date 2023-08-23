const SET_MAIN_SLIDER_PROJ_DATAS = "SET_MAIN_SLIDER_PROJ_DATAS";

const defaultState = {
  projSlidesMainItems: [],
  isFetching: true,
};

export default function mainDataReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_MAIN_SLIDER_PROJ_DATAS:
    return {
      ...state,
      projSlidesMainItems: action.payload,
    };
  default:
    return state;
  }
}

export const setMainProjSlidesDatas = (mainProjSlidesDatas) => ({
  type: SET_MAIN_SLIDER_PROJ_DATAS,
  payload: mainProjSlidesDatas,
});
