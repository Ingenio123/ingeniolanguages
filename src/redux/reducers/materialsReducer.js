const initialState = {
  materials: [],
};
export default function MaterialsReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_MATERIALS":
      // let a1 = action.payload.materials.found(x => x.)
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
