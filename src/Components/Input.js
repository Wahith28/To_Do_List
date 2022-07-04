import { InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { todoContext } from "../App";
import Data from "../Data";

const Inputfield = () => {
  const { todos, setTodos, text, setText, add, setError } = useContext(
    todoContext
  );

  function handleText(e) {
    const text = e.target.value;
    setText(e.target.value);
    if (text !== "") {
      const temp = todos.filter((todos) => {
        return todos.text.toLowerCase().includes(text.toLowerCase());
      });
      setTodos(temp);
    } else {
      setTodos(Data);
    }
  }

  function handleTextAdd(e) {
    setText(e.target.value);
  }

  function addTodo() {
    if (text !== "") {
      let canAddTodo = true;
      if (todos.some((t) => t.text === text)) {
        canAddTodo = window.confirm(
          "Todo " + text + " already present, you want to continue?"
        );
      }
      if (canAddTodo) {
        setTodos(todos.concat({ id: Math.random(), text: text, check: false }));
        setText("");
        setError(false);
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className="inpComp">
      <TextField
        id="outlined-start-adornment"
        className="inp"
        sx={{ width: "100%", input: { color: "white" } }}
        fullWidth
        value={text}
        onChange={!add ? handleText : handleTextAdd}
        size="small"
        placeholder={!add ? "Search..." : "Add Item"}
        InputProps={{
          classes: {
            notchedOutline: "notchedOutline"
          },
          endAdornment: add && (
            <InputAdornment position="start" onClick={addTodo}>
              <CheckIcon style={{ color: "#00ffcc" }} />
            </InputAdornment>
          )
        }}
        InputLabelProps={{
          classes: {
            root: "inputLabel",
            focused: "inputLabel"
          }
        }}
      />
    </div>
  );
};

export default Inputfield;
