import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setStep } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const step = useSelector((state) => state.step);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="App">Counter: {counter}</div>
      <button onClick={() => dispatch(increment(Number(step)))}>+</button>
      <button onClick={() => dispatch(decrement(Number(step)))}>-</button>
      <input type="number" onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={() => dispatch(setStep(value))}>Set Step</button>
    </div>
  );
}

export default App;
