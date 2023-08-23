const SET_CATEGORY_DATAS = "SET_CATEGORY_DATAS";
const SET_CATEGORY_CAROUSEL_DATAS = "SET_CATEGORY_CAROUSEL_DATAS";

const defaultState = {
  mainCategoryItems: [],
  carouselCategoryItems: [],
  isFetching: true,
};

export default function categoryDataReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_CATEGORY_DATAS:
    return {
      ...state,
      mainCategoryItems: action.payload,
    };
  case SET_CATEGORY_CAROUSEL_DATAS:
    return {
      ...state,
      carouselCategoryItems: action.payload,
    };
  default:
    return state;
  }
}

export const setCategoryDatas = (categoryDatas) => ({
  type: SET_CATEGORY_DATAS,
  payload: categoryDatas,
});

export const setCategoryCarouselDatas = (categoryCarouselDatas) => ({
  type: SET_CATEGORY_CAROUSEL_DATAS,
  payload: categoryCarouselDatas,
});
