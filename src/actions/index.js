const addTodo = (todo) => {
  if (todo) {
    return {
      type: "ADD-TODO",
      payload: todo,
    };
  }
  return {
    type: 'EMPTY-STRING'
}

};

export default addTodo;
