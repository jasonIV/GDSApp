import { baseApiUrl } from "../config";
import { FETCH_SUCCESS, FETCH_LOADING, FETCH_ERROR, URL_SUCCESS, URL_ERROR } from "../reducers/dashboardReducer";

export const fetchUserData = (phone) => {
  return(dispatch) => {
    dispatch({type: FETCH_LOADING})
    fetch(
      `https://efi2torz90.execute-api.ap-southeast-1.amazonaws.com/staging/balance/read`,
      {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone: phone,
        })
      }
    )
    .then(res => res.json())
    .then(res => dispatch({type: FETCH_SUCCESS, username: res.body.Item.username, balance: res.body.Item.gds_balance, transactions: res.body.Item.transactions}))
    .catch(err => dispatch({type: FETCH_ERROR, err: "Something Wrong."}))
  }
}

export const fetchUrl = (user_agent) => {
  return(dispatch) => {
    fetch(
      `https://agent_api.mintheinkha.com/agent/demo/request`,
      {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mtk_agent: "medi",
          mtk_agent_code: " MDI1850",
          mtk_agent_secret: "834jfi4389rjkf089trkjjsajkr89437",
          user_agent: user_agent
        })
      })
      .then(res => {
        console.log(res)
        dispatch({type: URL_SUCCESS, url: "something"})
      })
      .catch(err => {
        dispatch({type: URL_ERROR, err: err})
        console.log(err)
      })
  }
}
