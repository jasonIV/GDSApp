import React from "react";

//types
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_LOADING = "SIGN_IN_LOADING";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const SIGN_OUT_SUCCESS = "SIGN_IN_ERROR";

initialState = {
  phone: null,
  isSignedIn: false,
  isLoading: false,
  err: null
}

//auth reducer for updating states for auth actions
export default function(state = initialState, action) {
  switch(action.type){
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        phone: action.phone,
        isSignedIn: true,
        isLoading: false,
        error: null
      }
    case SIGN_IN_LOADING:
      return {
        ...state,
        isSignedIn: false,
        isLoading: true,
        error: null
      }
    case SIGN_IN_ERROR:
      return {
        ...state,
        isSignedIn: false,
        isLoading: false,
        err: action.err,
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isSignedIn: false,
        isLoading: false,
        error: null
      }
    default:
      return state;
  }
}
