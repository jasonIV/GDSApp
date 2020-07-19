//types
export const URL_SUCCESS = "URL_SUCCESS";
export const URL_LOADING = "URL_LOADING";
export const URL_ERROR = "URL_ERROR";

initialState = {
  loading: false,
  url: null,
  err: null,
}

export default function(state=initialState, action){
  switch(action.type){
    case URL_SUCCESS:
      return {
        ...state,
        loading: false,
        url: action.url,
        err: null,
      }
    case URL_LOADING:
      return {
        ...state,
        loading: true,
        url: null,
        err: null,
      }
    case URL_ERROR:
      return {
        ...state,
        loading: false,
        url: null,
        err: action.err,
      }
    default:
      return state
  }
}
