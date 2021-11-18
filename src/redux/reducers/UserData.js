const initialState = {
  data: {},
};
export default function CreateTemary(state = initialState, action) {
  switch (action.type) {
    case "DATA_USER_DEMO_CLASS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
