//Function that returns the expenses that satisfy the filter conditions, and are sorted; all with respect to the state.
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((eachExpense)=> {
        const startDateMatch = typeof startDate!== 'number' || (eachExpense.createdAt >= startDate )
        const endDateMatch = typeof endDate!== 'number' || (eachExpense.createdAt <= endDate)
        const textMatch = !text || eachExpense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b)=> {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1: -1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1;
        }
    });
};

