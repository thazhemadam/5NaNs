import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component{

    onSubmitDispatch = (editedExpense)=> {
        this.props.startEditExpense(this.props.expense.id, editedExpense);
        this.props.history.push('/');
    };

    onClickRemove = (e)=> {
        this.props.startRemoveExpense( {id: this.props.expense.id })
        this.props.history.push('/');
    };
 
    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                    <div className="header__content">
                        <h1 className="page-header__title">Edit Expense</h1>
                        <button className="button button--link button--remove" title="Remove Expense" onClick={this.onClickRemove}> 🗑️ </button>
                    </div>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmitDispatch = {this.onSubmitDispatch}
                    />
                </div>
            </div>
        );            
    };  
};

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((eachExpense)=> (eachExpense.id===props.match.params.id))
});

const mapDispatchToProps = (dispatch, props) => ({       
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    startEditExpense: (id, editedExpense) => dispatch(startEditExpense(id, editedExpense))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);