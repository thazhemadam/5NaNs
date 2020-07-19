import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component{

    onSubmitDispatch = (editedExpense)=> {
        this.props.editExpense(this.props.expense.id, editedExpense);
        this.props.history.push('/');
    };

    onClickRemove = (e)=> {
        this.props.startRemoveExpense( {id: this.props.expense.id })
        this.props.history.push('/');
    };
 
    render(){
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmitDispatch = {this.onSubmitDispatch}
                />
                <button onClick = {this.onClickRemove}>Remove</button>
            </div>
        );            
    };  
};

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((eachExpense)=> (eachExpense.id===props.match.params.id))
});

const mapDispatchToProps = (dispatch, props) => ({       
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    editExpense: (id, editedExpense) => dispatch(editExpense(id, editedExpense))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);