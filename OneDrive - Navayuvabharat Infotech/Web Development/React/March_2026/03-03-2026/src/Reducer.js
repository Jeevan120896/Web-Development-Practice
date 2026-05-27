export const initialState = {
  count: 0,   // Initial state of the counter
};

export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };  // Increase count by 1

    case "DECREMENT":
      return { count: state.count > 0 ? state.count - 1 : 0 };  // Decrease count by 1

    case "RESET":
      return { count: 0 };                // Reset count to 0

    default:
      return state;                       // Default: do nothing
  }
}
