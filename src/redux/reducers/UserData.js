const initialState = {
  demoClass: false,
  addData: 0,
  loading: true,
  error: null,
};
export default function CreateTemary(state = initialState, action) {
  switch (action.type) {
    case "DATA_USER_DEMO_CLASS":
      const { demoClass, addData } = action.payload;
      return {
        ...state,
        demoClass,
        addData,
        loading: false,
      };
    case "LOADING_USER_DEMO_CLASS":
      return {
        ...state,
        loading: true,
      };
    case "ERROR_USER_DEMO_CLASS":
      return {
        ...state,
        data: {},
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
