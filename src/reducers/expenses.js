const expensesReducerDefaultState  = [];
export default (expenseProperty = expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [...expenseProperty, action.expense];

        case "REMOVE_EXPENSE":
            return expenseProperty.filter(({id}) => (id!==action.id));

        case "EDIT_EXPENSE":
            return expenseProperty.map((eachExpense)=> {
                if(eachExpense.id === action.id){
                    return{
                        ...eachExpense,
                        ...action.updates
                    };
                }
                else{
                    return eachExpense;
                }
            });
            
        case "SET_EXPENSES":
            return action.expenses;            

        default:
            return expenseProperty;
    }
};

