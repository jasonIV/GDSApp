import { baseApiUrl } from "../config";
import { SIGN_IN_SUCCESS, SIGN_IN_LOADING, SIGN_IN_ERROR, SIGN_OUT_SUCCESS } from "../reducers/authReducer"

export const signIn = (phone, password) => {
  return(dispatch) => {
    dispatch({type: SIGN_IN_LOADING})
    fetch(
      `${baseApiUrl}/auth/login`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: phone,
          password: password,
        })
      })
    .then(res => res.json())
    .then(res => {
      if(res.body.phone){
        dispatch({type: SIGN_IN_SUCCESS, phone: res.body.phone})
      }
      else{
        dispatch({type: SIGN_IN_ERROR, err: res.body})
      }
    })
    .catch(err => 
      dispatch({type: SIGN_IN_ERROR})
    )
  }
}

export const signOut = () => {
  return(dispatch) => {
    dispatch({type: SIGN_OUT_SUCCESS})
  }
}

export async function signUp(name, phone, password) {
  try {
    let response = await fetch(
      `${baseApiUrl}/auth/signup`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: name,
          phone: phone,
          password: password,
        })
      });
    let json = await response.json();
    return json.body
  } catch (error) {
      console.error(error);
  }
}
