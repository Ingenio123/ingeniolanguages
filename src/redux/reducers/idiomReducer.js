const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_IDIOM":
      return {
        ...state,
        idiom: payload,
      };
    case "ERROR_IDIOM":
      return {
        ...state,
        idiom: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default Reducer;
