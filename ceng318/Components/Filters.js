import classes from "./Filters.module.css";
import { useState } from "react";

const Filters = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(enteredTitle);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(enteredAmount);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.filterContainer} onSubmit={submitHandler}>
      <div className={classes.filter}>
        <label>Location</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      {/* <KindFilter /> */}

      <div className={classes.filter}>
        <label>Kind</label>
        <select>
          <option>Cat</option>
          <option>Dog</option>
          <option>Other</option>
        </select>
      </div>
      <div className={classes.filter}>
        <label>Age</label>
        <input
          type="number"
          min="0.1"
          step="0.1"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
        <select>
          <option>Months</option>
          <option>Years</option>
        </select>
      </div>
      <div className={classes.filter}>
        <label>Special Needs</label>
        <select>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <button className={classes.filterButton} type="submit">
        Filter Search
      </button>
    </form>
  );
};

export default Filters;
