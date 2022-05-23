import ReactDOM from "react-dom";
import HandleToDoInput from "./HandleToDoInput";
import React, { useEffect } from "react";
import axios from "axios";

const App = () => {

  useEffect(async (res, req) => {
    try {
      await axios.get("/daniela");
      console.log(res);
    } catch (e) {
      console.error(e);
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
