import { useContext } from "react";
import { todoContext } from "../App";
import Todo from "./Todo";

const Content = () => {
  const { todos, setTodos, error, filter, filterArray } = useContext(
    todoContext
  );

  function removeTodo(idTodoToRemove) {
    let newTodos = todos.filter((t) => {
      return t.id !== idTodoToRemove;
    });

    setTodos(newTodos);
  }

  function handleCheck(toCheck) {
    setTodos(
      todos.map((t) => {
        if (t.id === toCheck.id) {
          t.check = !t.check;
        }
        return t;
      })
    );
  }

  return (
    <div className="content">
      {error && <div className="contenterror">Enter a Value</div>}
      {filter &&
        filterArray.map((t) => (
          <Todo
            todo={t}
            removeTodo={() => removeTodo(t.id)}
            handleCheck={() => {
              handleCheck(t);
            }}
          />
        ))}
      {!filter &&
        todos.map((t) => (
          <Todo
            todo={t}
            removeTodo={() => removeTodo(t.id)}
            handleCheck={() => {
              handleCheck(t);
            }}
          />
        ))}
    </div>
  );
};

export default Content;
