export default function cases(
  state = {
    avance: "25%",
    cart: false,
    address: false,
    card: false,
    success: false,
  },
  action
) {
  switch (action.type) {
    case "AddCart":
      const val = action.payload;
      return {
        ...state,
        avance: `${val}%`,
        cart: action.payload ? true : false,
      };
    case "Address":
      return {
        ...state,
        avance: `${action.payload}%`,
        address: action.payload ? true : false,
      };
    case "AddDataCard":
      return {
        ...state,
        avance: `${action.payload}%`,
        card: action.payload ? true : false,
      };
    case "Success":
      return {
        ...state,
        avance: `${action.payload}%`,
        success: action.payload ? true : false,
      };
    case "Remove":
      return {
        state,
      };
    default:
      return state;
  }
}
