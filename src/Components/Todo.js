import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox } from "@mui/material";

const Todo = (props) => {
  return (
    <div className="todo">
      <span
        style={{ textDecoration: props.todo.check ? "line-through" : "none" }}
      >
        <Checkbox
          onClick={props.handleCheck}
          checked={props.todo.check}
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "#00ffcc"
            }
          }}
        />
        &nbsp;
        {props.todo.text}
      </span>
      <DeleteIcon onClick={props.removeTodo} style={{ color: "#00ffcc" }} />
    </div>
  );
};

export default Todo;
