export const setTextFilter = (text = '') => ({
    type: "UPDATE_TEXT",
    text
});

export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
    // sortBy: 'amount'
});

export const sortByDate = () => ({
    type: "SORT_BY_DATE"
    // sortBy: 'date'
});

export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});