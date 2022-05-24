import ReactDOM from "react-dom";
import HandleToDoInput from "./HandleToDoInput";
import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  function getTodos() {
    axios.get("/daniela");
    console.log("got Todos");
  }

  useEffect(() => {
    async function showTodos() {
      await getTodos();
    }
  }, []);

  return (
    <div className="app">
      <HandleToDoInput />
      <footer>
        <p>
          Made by{" "}
          <a href="https://github.com/daniserafs/entria-challenge">
            Daniela Serafim
          </a>
        </p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
