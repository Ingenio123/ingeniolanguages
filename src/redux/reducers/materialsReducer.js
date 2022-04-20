const initialState = {
  materials: {},
};
export default function MaterialsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MATERIALS":
      return {
        ...state,
        materials: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
