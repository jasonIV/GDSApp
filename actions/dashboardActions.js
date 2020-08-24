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
