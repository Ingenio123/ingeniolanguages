import Url from "../components/Urls";
import { GetLocalStorage } from "../helpers/Auth";
export const Qualification = async (value) => {
  const Endpoint = `${Url.url}/`;
  const resp = await fetch(Endpoint, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GetLocalStorage.token}`,
    },
    body: JSON.stringify(value),
  });
  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
};
