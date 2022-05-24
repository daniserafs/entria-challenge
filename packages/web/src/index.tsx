import ReactDOM from "react-dom";
import HandleToDoInput from "./HandleToDoInput";
import React, { useEffect } from "react";
import axios from "axios";

const App: React.FC = () => {
  useEffect(() => {
    function getTodos() {
      axios.get("/daniela");
      console.log("of course it's not working");
    }
    async function showTodos() {
      await getTodos();
    }
    showTodos()
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
function res(res: any) {
  throw new Error("Function not implemented.");
}

