export const FETCH_POSTS_BEGIN = "FETCH_POSTS_BEGIN";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const LIKE_POST = "LIKE_POST";
export const LOVE_POST = "LOVE_POST";
export const CLAP_POST = "CLAP_POST";
export const SUPER_POST = "SUPER_POST";
export const DISLIKE_POST = "DISLIKE_POST";

const API_ENDPOINT = "https://api.myjson.com/bins/18feih";

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});

export function fetchPosts() {
  return function(dispatch) {
    dispatch(fetchPostsBegin());
    return fetch(API_ENDPOINT)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(data => {
        let newData = data.aData.map(elem => {
          elem.heartCount = 4;
          elem.clapCount = 7;
          elem.superbCount = 2;
          elem.dislikeCount = 5;
          return elem;
        });
        setTimeout(function() {
          dispatch(fetchPostsSuccess(newData));
        }, 2000);
      });
  };
}

export function likePost(id) {
  return function(dispatch) {
    dispatch(likePostById(id));
  };
}

export const likePostById = id => {
  return {
    type: "LIKE_POST",
    payload: id
  };
};

export function lovePost(id) {
  return function(dispatch) {
    dispatch(lovePostById(id));
  };
}

export const lovePostById = id => {
  return {
    type: "LOVE_POST",
    payload: id
  };
};

export function clapPost(id) {
  return function(dispatch) {
    dispatch(clapPostById(id));
  };
}

export const clapPostById = id => {
  return {
    type: "CLAP_POST",
    payload: id
  };
};

export function superPost(id) {
  return function(dispatch) {
    dispatch(superPostById(id));
  };
}
export const superPostById = id => {
  return {
    type: "SUPER_POST",
    payload: id
  };
};

export function dislikePost(id) {
  return function(dispatch) {
    dispatch(dislikePostById(id));
  };
}

export const dislikePostById = id => {
  return {
    type: "DISLIKE_POST",
    payload: id
  };
};
