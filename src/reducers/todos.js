const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD-TODO":
      state.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default todosReducer;
