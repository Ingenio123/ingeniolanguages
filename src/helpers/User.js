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

export const UpdateInformation = async ({ valores }) => {
  console.log(JSON.stringify(valores));

  const user = JSON.parse(window.localStorage.getItem("user"));
  try {
    const res = await fetch(`${Url.url}/data/updateinformation`, {
      method: "POST",
      body: JSON.stringify(valores),
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    });
    if (res.status === 200) {
      return {
        message: "Information updated successfully",
        error: false,
      };
    }
    return {
      error: true,
      message: "Error text",
    };
  } catch (error) {
    throw error;
  }
};
