import URI from "../components/Urls";
const END_POINT = URI.url;
//
export const GET_ONE_SUMMARY_SERVICES = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  console.log(user);
  const response = await fetch(`${END_POINT}/sudent/summary/getsummary`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //
  //   console.log(response);
  //
  let status = response.status;
  let { data } = await response.json();
  if (status > 300 && status < 500) {
    return {
      error: true,
      data,
    };
  }
  return {
    error: false,
    data,
  };
};
