const initalState = {
  courses: [],
};
const Reducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MENU_IDIOM":
      return {
        ...state,
        courses: payload.courses,
      };
    default:
      return {
        ...state,
      };
  }
};
export default Reducer;
