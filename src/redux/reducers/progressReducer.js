export default function progressReduccer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SCORE":
      return {
        ...state,
        score: payload,
      };
    case "QUIT_SCORE":
      return {
        ...state,
        score: payload,
      };
    case "DEFAULT_SCORE":
      return {
        ...state,
        score: payload,
      };
    case "ADD_LEVEL":
      return {
        ...state,
        level: payload,
      };
    case "RESET_SCORE":
      return {
        ...state,
        scoreRuleta: payload,
      };
    case "ADD_SCORE_RULETA":
      return {
        ...state,
        scoreRuleta: payload,
      };
    case "QUIT_SCORE_RULETA":
      return {
        ...state,
        scoreRuleta: payload,
      };
    case "ADD_SUBLEVEL":
      return {
        ...state,
        sublevel: payload,
      };
    default:
      return state;
  }
}
