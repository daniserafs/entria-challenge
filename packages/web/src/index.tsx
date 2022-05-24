import ReactDOM from "react-dom";
import HandleToDoInput from "./HandleToDoInput";
import React from "react";


const App: React.FC = () => {

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
