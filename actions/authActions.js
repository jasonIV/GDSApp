import { baseApiUrl } from "../config";

export async function signIn(phone, password) {
  try {
    let response = await fetch(
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
      });
    let json = await response.json();
    return json.body
  } catch (error) {
      console.error(error);
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
