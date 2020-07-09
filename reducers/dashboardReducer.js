import React from "react";

//types
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";
export const URL_SUCCESS = "URL_SUCCESS";
export const URL_ERROR = "URL_ERROR";

initialState = {
  username: null,
  balance: null,
  transactions: [],
  loading: false,
  url: null,
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
    case URL_SUCCESS:
      return {
        ...state,
        url: action.url,
        err: null,
      }
    case URL_ERROR:
      return {
        ...state,
        url: null,
        err: action.err,
      }
    default:
      return state;
  }
}
