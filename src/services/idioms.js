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
