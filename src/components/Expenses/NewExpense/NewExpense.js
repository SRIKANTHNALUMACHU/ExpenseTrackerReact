import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditinHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onCancel={stopEditinHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
