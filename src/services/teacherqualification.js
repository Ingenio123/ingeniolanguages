import Url from "../components/Urls";

export const Qualification = async (value) => {
  const Endpoint = `${Url.url}/teacher/summary`;
  const { token } = JSON.parse(window.localStorage.getItem("user"));
  console.log(token);
  try {
    const resp = await fetch(Endpoint, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(value),
    });
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
    if (resp.status >= 400) {
      const error = await resp.json();
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
