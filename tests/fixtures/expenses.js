import moment from 'moment';

export default [{
    id: '1',
    description: 'Test Expense 1',
    note:'',
    amount: 69,
    createdAt: 0
},{
    id: '2',
    description: 'Pseudo Price 2',
    note:'',
    amount: 42069,
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id: '3',
    description: 'Faux Levy 3',
    note:'',
    amount: 1234,
    createdAt: moment(0).add(4,'days').valueOf()
}];

