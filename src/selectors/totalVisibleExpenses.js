//Function that returns the total amount which is the sum of all the visible expenses' amounts.
export default (expenses) => {
    return  expenses.map((expense) => expense.amount)   //Generates an array of all the amounts of all the expenses
                    .reduce((total, amount) =>  total + amount, 0); //Calculates the sum of all the amounts in the array generated above
}