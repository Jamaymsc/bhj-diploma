
class CreateAccountForm extends AsyncForm {

  onSubmit(data) {
    Account.create(data, (err, response) => {
      if (err === null && response.success) {
          App.update();
          App.getModal('createAccount').close();
          this.element.reset();
    } 
   });
  }
}