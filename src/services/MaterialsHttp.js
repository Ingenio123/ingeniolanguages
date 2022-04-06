import url from "../components/Urls";

export const AddMAterialsTeacher = async (DATA) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const resp = await fetch(`${url.url}/v1/data/add/materials`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify(DATA),
  });
  if (!resp.ok) {
    return {
      error: true,
    };
  }
  const data = await resp.json();

  return {
    error: false,
    data: data,
  };
};
