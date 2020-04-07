import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  LIKE_POST,
  LOVE_POST,
  CLAP_POST,
  SUPER_POST,
  DISLIKE_POST
} from "../actions/postAction";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const postReducer = (state = initialState, action) => {
  let index = {};
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.posts
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case LIKE_POST:
      state = { ...state };
      index = state.items.findIndex(post => post.id === action.payload);
      state.items[index].likeCount++;
      return {
        ...state,
        loading: false,
        items: [...state.items]
      };
    case LOVE_POST:
      state = { ...state };
      index = state.items.findIndex(post => post.id === action.payload);
      state.items[index].heartCount++;
      return {
        ...state,
        loading: false,
        items: [...state.items]
      };

    case CLAP_POST:
      state = { ...state };
      index = state.items.findIndex(post => post.id === action.payload);
      state.items[index].clapCount++;
      return {
        ...state,
        loading: false,
        items: [...state.items]
      };

    case SUPER_POST:
      state = { ...state };
      index = state.items.findIndex(post => post.id === action.payload);
      state.items[index].superbCount++;
      return {
        ...state,
        loading: false,
        items: [...state.items]
      };

    case DISLIKE_POST:
      state = { ...state };
      index = state.items.findIndex(post => post.id === action.payload);
      state.items[index].dislikeCount++;
      return {
        ...state,
        loading: false,
        items: [...state.items]
      };

    default:
      return state;
  }
};

export default postReducer;
