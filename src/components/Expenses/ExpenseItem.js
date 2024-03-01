// import './Expense.css';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';


function ExpenseItem(props){

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            {/* <div>{props.date.toISOString()}</div> */}
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            {/* <h2>{LocationOfExpenditure}</h2> */}
            <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>

        )
}
export default ExpenseItem;

