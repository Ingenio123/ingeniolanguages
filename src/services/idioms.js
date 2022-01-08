import Url from "../components/Urls";
const Endpoint = Url.url;

export const getIdiom = async (idiom) => {
  try {
    const res = await fetch(`${Endpoint}/data/courses${idiom}`);
    if (res.status >= 400) {
      const error = await res.json();
      return error;
    }
    const data = await res.json();
    return data;
  } catch (_err) {
    console.log(_err);
    return false;
  }
};

export const getCourses = async (token) => {
  try {
    const res = await fetch(`${Endpoint}/data/verifyIstudent`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (res.status >= 400) {
      return false;
    }
    const data = await res.json();
    return {
      data: data.QueryStudent.courses,
    };
  } catch (_err) {
    console.log(_err);
  }
};
