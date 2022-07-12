
class TransactionsWidget {

  constructor( element ) {
    if (!element) {
      throw new Error('Element was not found!');
  }

  this.element = element;
  this.registerEvents();
  }
 
  registerEvents() {
    const incomeButton = this.element.querySelector('.create-income-button');
    const expenseButton = this.element.querySelector('.create-expense-button');
    
    incomeButton.addEventListener('click', () => {
        App.getModal('newIncome').open();
    });


    expenseButton.addEventListener('click', () => {
        App.getModal('newExpense').open();
    });
  }
}
