const intitalState = { price: 0, items: 0 };
export default function cases(state = intitalState, action) {
  const { payload, type } = action;
  switch (type) {
    // payload =  pricetotal
    case "PROCCED_TO_PAY":
      return {
        ...state,
        price: payload.price,
      };
    default:
      return { ...state };
  }
}
