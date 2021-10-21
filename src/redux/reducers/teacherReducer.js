const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_TEACHERS":
      return {
        ...state,
        teachers: [...state.data, payload],
      };
    case "ERROR_TEACHERS":
      return {
        ...state,
        teachers: false,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
