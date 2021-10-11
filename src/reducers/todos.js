const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD-TODO":
      return state.push(action.payload);
    default:
      return state;
  }
};

export default todosReducer;
