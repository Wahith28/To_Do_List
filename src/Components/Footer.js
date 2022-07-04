import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CircleIcon from "@mui/icons-material/Circle";
import { todoContext } from "../App";

const Footer = () => {
  const {
    todos,
    sort,
    SetSort,
    add,
    setAdd,
    filter,
    setFilter,
    filterArray,
    setFilterArray,
    setError
  } = useContext(todoContext);

  function handleFilter(val) {
    SetSort(val);
    setFilter(true);
    setAdd(false);
    const temp = todos.filter((item) => item.check === val);
    setFilterArray(val === "All" ? todos : temp);
  }

  return (
    <div className="footer">
      <div className="ftLength">
        {!add ? (
          <AddIcon
            onClick={() => {
              setAdd(true);
              setFilter(false);
            }}
          />
        ) : (
          <ClearIcon
            onClick={() => {
              setAdd(false);
              setError(false);
            }}
          />
        )}
        <b>{filter ? filterArray.length : todos.length} Items</b>
      </div>
      <span className="sort">
        <span className="sortIn" onClick={() => handleFilter("All")}>
          All
          {sort === "All" && (
            <span style={{ position: "absolute", right: "15%", top: "25px" }}>
              <CircleIcon className="circle-icon" />
            </span>
          )}
        </span>
        <span className="sortIn" onClick={() => handleFilter(true)}>
          Completed
          {sort === true && (
            <span style={{ position: "absolute", right: "35%", top: "25px" }}>
              <CircleIcon className="circle-icon" />
            </span>
          )}
        </span>
        <span onClick={() => handleFilter(false)}>
          Remaining
          {sort === false && (
            <span style={{ position: "absolute", right: "40px", top: "45px" }}>
              <CircleIcon className="circle-icon" />
            </span>
          )}
        </span>
      </span>
    </div>
  );
};

export default Footer;
