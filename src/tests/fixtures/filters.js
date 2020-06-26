import moment from 'moment';

export const defaultFilters = {
    text: '',
    sortBy: 'date',
    sortOrder: 'desc',
    startDate: undefined,
    endDate: undefined
};

export const testFilters = {
    text: 'fixture',
    sortBy: 'amount',
    sortOrder: 'asc',
    startDate: moment(0),
    endDate: moment(0).add(3,'days')
};