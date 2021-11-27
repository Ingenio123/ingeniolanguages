const initialState = {};
export default function getIdioms(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_IDIOM_REDUCER":
      return {
        ...state,
        idiom: payload,
      };
    default:
      return state;
  }
}
