const addTodo = (todo, id) => {
  if (todo) {
    return {
      id,
      type: "ADD-TODO",
      payload: todo,
    };
  }
  return {
    type: "EMPTY-STRING",
  };
};

export default addTodo;
 