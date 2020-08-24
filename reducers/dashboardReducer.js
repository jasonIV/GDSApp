//types
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

initialState = {
  username: null,
  balance: null,
  transactions: [],
  loading: false,
  err: null,
}

//auth reducer for updating states for auth actions
export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_SUCCESS:
      return {
        ...state,
        username: action.username,
        balance: action.balance,
        transactions: action.transactions,
        loading: false,
        url: null,
        err: null,
      }
    case FETCH_LOADING:
      return {
        ...state,
        username: null,
        balance: null,
        transactions: [],
        loading: true,
        url: null,
        err: null,
      }
    case FETCH_ERROR:
      return {
        ...state,
        username: null,
        balance: null,
        transactions: [],
        loading: false,
        url: null,
        err: action.err,
      }
    default:
      return state;
  }
}
