import { mtkUrl } from "../config";
import { URL_SUCCESS, URL_LOADING, URL_ERROR } from "../reducers/baydinReducer";

export const fetchUrl = (user_agent) => {
  return(dispatch) => {
    dispatch({type: URL_LOADING})
    fetch(
      mtkUrl,
      {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mtk_agent: "medi",
          mtk_agent_code: "MEDI9654",
          mtk_agent_secret: "259kj2345k2034jdf893jkd893jfd8",
          user_agent: user_agent
        })
      })
    .then(res => res.json())
    .then(res => {
      dispatch({type: URL_SUCCESS, url: res.mtk_agent_form})
    })
    .catch(err => {
      dispatch({type: URL_ERROR, err: err})
    })
  }
}
