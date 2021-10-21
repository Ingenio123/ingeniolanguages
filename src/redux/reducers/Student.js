const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_STUDENT":
      return {
        ...state,
        student: payload,
      };
    case "ERROR_STUDENT":
      return {
        ...state,
        student: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
