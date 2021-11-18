import Url from "../components/Urls";

export const GetAllStudents = async () => {
  const token = JSON.parse(window.localStorage.getItem("user")).token;
  const res = await fetch(`${Url.url}/data/getAllStudents`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
