
class CreateTransactionForm extends AsyncForm {

  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  renderAccountsList() {
    const accountSelect = this.element.querySelector('.accounts-select');

    Account.list(User.current(), (err, response) => {
        if (response && response.data) {
            accountSelect.innerHTML = '';
            response.data.forEach((element) => {
                addItemToTheList(element);
            });
        }
    });

    function addItemToTheList(item) {
        accountSelect.innerHTML += `<option value="${item.id}">${item.name}</option>`;
    }
  }

  onSubmit(data) {
    Transaction.create(data, (error, response) => {
      if (response && response.success) {
          App.update();
          this.element.reset();
          App.getModal('newIncome').close();
          App.getModal('newExpense').close();
      }
   });
  }
}