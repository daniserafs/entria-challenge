import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

interface ToDo {
  id: string;
  task: string;
  check?: boolean;
}

const HandleToDoInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState("What needs to be done today");
  const [toDos, setToDos] = useState<Array<ToDo>>([]);

  const addTask = () => {
    const id = uuidv4();
    setToDos([...toDos, { id, task: input, check: false}]);
    setInput("What needs to be done today");
    inputRef.current?.focus();
  };

  const handleDelete = (id: string) => {
    const newToDo = toDos.filter((todo) => todo.id !== id);

    setToDos(newToDo);
    console.log(newToDo);
  };
  /* TODO: write the check function it'll probably update the false to true when someone completes a task
  but doenst want to have it off the list, so it has a differente behavior than the handleDelete */
  const handleCheck = () => {
    return null;
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
        <button onClick={addTask}>Add task</button>
      </header>
      <div>
        <ul>
          {toDos.map((toDo) => {
            return (
              <li key={toDo.id}>
                {toDo.task}
                <span>
                  <input
                    type="checkbox"
                    checked={toDo.check}
                    onChange={() => handleCheck()}
                  />
                </span>
                <button type="button" onClick={() => handleDelete(toDo.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HandleToDoInput;
