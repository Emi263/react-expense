export default (state, actions) => {
  switch (actions.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [actions.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
