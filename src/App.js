import { createContext, useEffect, useState } from "react";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Inputfield from "./Components/Input";
import Data from "./Data";
import "./styles.css";

export const todoContext = createContext();

export default function App() {
  const [todos, setTodos] = useState(Data);
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [add, setAdd] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  const [sort, SetSort] = useState("");

  useEffect(() => {
    SetSort("All");
  }, []);

  return (
    <todoContext.Provider
      value={{
        add,
        setAdd,
        todos,
        setTodos,
        text,
        setText,
        error,
        setError,
        filter,
        setFilter,
        filterArray,
        setFilterArray,
        sort,
        SetSort
      }}
    >
      <div className="App">
        <div className="bodyDiv">
          <Header />
          <Inputfield />
          <Content />
          <Footer />
        </div>
      </div>
    </todoContext.Provider>
  );
}
