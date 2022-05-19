import ReactDOM from "react-dom";
import HandleToDoInput from "./HandleToDoInput";

const App = () => {
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
