import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  const expense_list = props.expenses_list;
  let expenseContent = (
    <h2 className="expenses-list__fallback">No Expenses Found...</h2>
  );
  if (expense_list.length > 0) {
    expenseContent = expense_list.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ));
  }
  return <ul className="expenses-list">{expenseContent}</ul>;
}
export default ExpensesList;
