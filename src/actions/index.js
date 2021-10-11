const addTodo = (todo) => {
    return {
        type: 'ADD-TODO',
        payload: todo
    }
}

export default addTodo