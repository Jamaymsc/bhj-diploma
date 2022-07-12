
class AccountsWidget {

  constructor( element ) {
    if (!element) {
      throw new Error("Element was not found");
    }

    this.element = element;
    this.registerEvents();
    this.update();
  }

  registerEvents() {
    this.element.addEventListener("click", (e) => {
      e.preventDefault();
      const createAccount = e.target.closest(".create-account");
      const existAccount = e.target.closest(".account");

      if (createAccount) {
        App.getModal("createAccount").open();
      } else if (existAccount) {
        this.onSelectAccount(existAccount);
      }
    });
  }

  update() {
      if (!User.current()) {
        return;
      }

      Account.list(User.current(), (err, response) => {
        if (response && response.data) {
          this.clear();
          for (let element of response.data) {
            this.renderItem(element);
          }
        }
      });
  }


  clear() {
     const accounts = this.element.querySelectorAll(".account");
     for (let acc of accounts) {
      acc.remove();
     }
  }

  onSelectAccount( element ) {
     for (let item of document.querySelectorAll(".account")) {
      item.classList.remove("active");
     }
     element.classList.add("active");
     App.showPage("transactions", { account_id: element.dataset.id });
  }

  getAccountHTML(item) {
     return `<li class='account' data-id='${item.id}'>
     <a href='#'>
       <span>${item.name}</span> /
       <span>${item.sum}</span>
     </a></li>`;
  }

  renderItem(data) {
    this.element.insertAdjacentHTML("beforeend", this.getAccountHTML(data));
  }
}
