import Url from "../components/Urls";
export const RefreshToken = async (refreshToken) => {
  const Endpoint = `${Url.url}/data/refreshToken`;
  //   const { refreshToken } = JSON.parse(window.localStorage.getItem("user"));
  const res = await fetch(Endpoint, {
    method: "POST",
    headers: {
      refresh: refreshToken,
    },
  });
  const data = await res.json();
  return data;
};
