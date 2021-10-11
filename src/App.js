import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid'
import addTodo from "./actions";
import { deleteTodo } from "./actions/handleTodo";

function App() {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const id = nanoid()

  const handleClick = () => {
    dispatch(addTodo(todo, id))
    setTodo("");
  };
  const handleDelete = (event) => {
    const todoId = event.target.id
    dispatch(deleteTodo(todoId))
  }

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={handleClick}>Add Todo</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.todo}
              <button>Done</button>
              <button>Edit</button>
              <button id={todo.id} onClick={handleDelete}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
