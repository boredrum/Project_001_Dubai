const SET_BLOG_DATAS = "SET_BLOG_DATAS";

const defaultState = {
  items: [],
  isFetching: true,
};

export default function blogDataReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_BLOG_DATAS:
    return {
      ...state,
      items: action.payload,
    };
  default:
    return state;
  }
}

export const setBlogDatas = (blogDatas) => ({type: SET_BLOG_DATAS, payload: blogDatas});