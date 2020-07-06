import { baseApiUrl } from "../config";

export async function fetchUserData(phone){
  try{
    let response = await fetch(
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
      })
    let json = await response.json();
    return json.body;
  }
  catch(error){
    console.log(error)
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
