import React from 'react';

const EditExpense = (props) => (
    <div>
        Edit your Expense : {props.match.params.id}
    </div>
);

export default EditExpense;