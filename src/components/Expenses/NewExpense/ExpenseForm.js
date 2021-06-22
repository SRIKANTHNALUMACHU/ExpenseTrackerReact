import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm(props) {
  const [titleChange, setChangedTitle] = useState("");
  const [amountChange, setChangedAmount] = useState("");
  const [dateChange, setChangedDate] = useState("");
  /*  const [userInput, setUSerInput] = useState({
    titleChange: "",
    amountChange: "",
    dateChange: "",
  }); */
  const titleChangeHandler = (event) => {
    setChangedTitle(event.target.value);
    /* setUSerInput({
      ...userInput,
      titleChange: event.target.value,
    }); */
    /*  setUSerInput((prevState) => {
      return { ...prevState, titleChange: event.target.value };
    }); */
  };
  const amountChangeHandler = (event) => {
    /* setUSerInput({
      ...userInput,
      amountChange: event.target.value,
    }); */
    setChangedAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    /*  setUSerInput({
      ...userInput,
      dateChange: event.target.value,
    }); */
    setChangedDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleChange,
      amount: +amountChange,
      date: new Date(dateChange),
    };
    props.onSaveExpenseData(expenseData);
    setChangedTitle(""); //this makes the input box empty after the form submitted
    setChangedDate("");
    setChangedAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <label>Title:</label>
          <input
            value={titleChange}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div onChange={amountChangeHandler} className="new_expense__control">
          <label>Amount:</label>
          <input value={amountChange} type="text" min="0.01" />
        </div>
        <div className="new_expense__control">
          <label>Date:</label>
          <input
            value={dateChange}
            onChange={dateChangeHandler}
            type="date"
            min="2020-01-01"
            max="2023-12-31"
          />
        </div>
        <div className="new_expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
