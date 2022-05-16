import react from "react";
import { useState } from "react";
import { useRef } from "react";
import { setTokenSourceMapRange } from "typescript";

const HandleToDoInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState("What needs to be done today");
  const [todos, setTodos] = useState<Array<string>>([]);

  const onClick = () => {
    setTodos([...todos, input]);
    setInput("What needs to be done today");
    inputRef.current?.focus();
  };

  return (
    <div>
      <header>
        <h1>to do list</h1>
        <input
          ref={inputRef}
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button onClick={onClick}>Add task</button>
      </header>
      <div>
        <ul>
          {todos.map((todo) => {
            return <li key={todo}>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default HandleToDoInput;
