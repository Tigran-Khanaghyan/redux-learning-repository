const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD-TODO":
      state.push({ id: action.id, todo: action.payload });
      return state;
    case "DELETE":
      state = state.filter((todo) => todo.id !== action.todoId);
      return state;
    default:
      return state;
  }
};

export default todosReducer;
