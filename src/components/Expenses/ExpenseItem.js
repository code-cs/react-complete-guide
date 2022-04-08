import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = ({title, amount, date, year, month, day }) => {
  const [titles, setTitle] = useState(title);

  const handleClick = () => {
    setTitle('updated')
    console.log(titles);
  }
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description" />
        <h2>{titles}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handleClick}>Change Title</button>
      </Card>
    </>
  );
}

export default ExpenseItem;
