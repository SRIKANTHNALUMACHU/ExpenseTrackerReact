import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExepenseChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const items = props.items;
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    //console.log(selectedYear);
  };
  const expense_item = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //console.log(expense_item);
  return (
    <Card className="expenses">
      <ExpensesFilter
        year={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExepenseChart expenses={expense_item} />

      <ExpensesList expenses_list={expense_item} />

      {/*  <ExpenseItem
        date={items[0].date}
        title={items[0].title}
        amount={items[0].amount}
      />
      <ExpenseItem
        date={items[1].date}
        title={items[1].title}
        amount={items[1].amount}
      />
      <ExpenseItem
        date={items[2].date}
        title={items[2].title}
        amount={items[2].amount}
      />
      <ExpenseItem
        date={items[3].date}
        title={items[3].title}
        amount={items[3].amount}
      /> */}
    </Card>
  );
}
export default Expenses;
