export const useURLSearch = () => {
  const get = (queryLocation, paramSearch) => {
    const url = new URLSearchParams(queryLocation);
    if (url.has(paramSearch)) {
      return {
        existe: true,
        data: url.get(paramSearch),
      };
    }
    return {
      existe: false,
      data: null,
    };
  };
  return {
    get,
  };
};
