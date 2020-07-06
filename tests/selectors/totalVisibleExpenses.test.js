import testExpenses from '../fixtures/expenses';
import getTotalExpenseAmount from '../../src/selectors/totalVisibleExpenses';

test('Return 0 when there are no expenses', () => {
    const res = getTotalExpenseAmount([]);
    expect(res).toBe(0);
})

test('Add a single expense', () => {
    const res = getTotalExpenseAmount([testExpenses[0]]);
    expect(res).toBe(testExpenses[0].amount);
})

test('Add multiple expenses', () => {
    const res = getTotalExpenseAmount(testExpenses);
    expect(res).toBe(43372);
})

