const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_STUDENT":
      return {
        ...state,
        student: payload,
        error: false,
        loading: false,
      };
    case "ERROR_STUDENT":
      return {
        ...state,
        student: null,
        error: true,
        loading: false,
      };
    case "NOT_STUDENT":
      return {
        ...state,
        student: null,
        error: false,
        loading: false,
      };
    case "LOADING_STUDENT":
      return {
        ...state,
        loading: true,
        student: null,
        error: false,
      };
    case "LOADING_KILL":
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
