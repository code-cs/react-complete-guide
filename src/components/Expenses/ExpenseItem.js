import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date, year, month, day }) => {
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description" />
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </Card>
    </>
  );
}

export default ExpenseItem;
