import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  //const date = new Date(2021, 5, 17); //month number starts from 0,so 5 for june
  //const description = "Car Insurance";
  //const amount = 3000;
  //const [title, setTitle] = useState(props.title);
  const { title, date, amount } = props;

  /*  function clickHandler() {
    var a = prompt("Enter title!");
    setTitle(a);
  }
  //for this function to execute we write onChange for button as onChange={clickHandler}
 */
  //toISOSting converts date object into string
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}Rs.</div>
        <button>Change title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
