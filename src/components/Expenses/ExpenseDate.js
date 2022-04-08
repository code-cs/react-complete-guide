import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate = ({date}) => {
    const year = date.getFullYear();
    const month = date.toLocaleString('en-us', {
        month: 'long'
    });
    const day = date.toLocaleString('en-us', {
        day: '2-digit'
    });

    return (
        <>
        <Card className='expense-date'>
          <div className='expense-date__month'>{month}</div>
          <div className='expense-date__day'>{day}</div>
          <div className='expense-date__year'>{year}</div>
        </Card>
        </>
    );
}
export default ExpenseDate;