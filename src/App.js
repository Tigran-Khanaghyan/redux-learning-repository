import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./actions";

function App() {
  const user = useSelector((state) => state.user);

  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState(user.password);

  let tempName = user.name
  let tempPassword = user.password

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUser(name, password));
    setName('')
    setPassword('')
  
  };

  return (
    <div>
      <input
        type="text"


        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={() => handleClick()}>Sign In</button>
      <p>{tempName}{tempPassword}</p>
    </div>
  );
}

export default App;
