import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addTodo from "./actions";

function App() {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

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
            <li key={todo.toString()}>
              {todo}
              <button>Done</button>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
