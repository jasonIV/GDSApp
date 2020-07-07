import { baseApiUrl } from "../config";
import { FETCH_SUCCESS, FETCH_LOADING, FETCH_ERROR } from "../reducers/dashboardReducer";

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

export async function fetchUrl(user_agent){
  try{
    let response = await fetch(
      "https://agent_api.mintheinkha.com/agent/demo/request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mtk_agent: "medi",
          mtk_agent_code: " MDI1850",
          mtk_agent_secret: "834jfi4389rjkf089trkjjsajkr89437",
          user_agent: user_agent
        })
      })
    let json = await response.json();
    return json.mtk_agent_form;
  }
  catch(err){
    console.log(err);
  }
}
