export default function progressReduccer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "DATA_SERVER":
      return {
        ...state,
        AllSummary: payload,
      };
    case "LOADING_SERVER":
      return {
        ...state,
        loading: payload,
      };
    case "DATA":
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}
