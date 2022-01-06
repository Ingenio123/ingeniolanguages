const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TYPE_METHOD":
      return {
        ...state,
        method: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default Reducer;
