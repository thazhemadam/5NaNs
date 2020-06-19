const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate : undefined,
    endDate : undefined,
};

export default (filterProperty = filtersReducerDefaultState, action) => {
    switch(action.type){
        case "UPDATE_TEXT":
            return {
                ...filterProperty,
                text: action.text
            }

        case "SORT_BY_DATE":
            return {
                ...filterProperty,
                sortBy: 'date'
            }

        case "SORT_BY_AMOUNT":
            return {
                ...filterProperty,
                sortBy: 'amount'
            }

        case "SET_START_DATE":
            return {
                ...filterProperty,
                startDate: action.startDate
            }

        case "SET_END_DATE":
            return {
                ...filterProperty,
                endDate: action.endDate
            }
            
        default:
            return filterProperty;
    }
};

