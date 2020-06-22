import moment from 'moment';

//Function that returns the expenses array that satisfy the filter conditions, and are sorted; all with respect to the state.
export default (expenses, {text, sortBy, sortOrder, startDate, endDate}) => {
    return expenses.filter((eachExpense)=> {
        const createdAtMoment = moment(eachExpense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; 
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true; ;
        const textMatch = !text || eachExpense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b)=> {

        if(sortBy === 'date'){
            if(sortOrder === 'desc'){
                return a.createdAt < b.createdAt? 1: -1;
            } 
            else if(sortOrder === 'asc'){
                return a.createdAt > b.createdAt? 1: -1;
            }
        }

        else if(sortBy === 'amount'){    
            if(sortOrder === 'desc'){
                return a.amount < b.amount ? 1:-1;
            } 
            else if(sortOrder === 'asc'){
                return a.amount > b.amount ? 1:-1;
            }
        }
    });
};

