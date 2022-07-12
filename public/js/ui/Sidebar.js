const toggleButton = document.querySelector(".sidebar-toggle");
const body =  document.querySelector(".sidebar-mini");
const menuLogin = document.querySelector(".menu-item_login");
const menuRegister =  document.querySelector(".menu-item_register");
const menulogout = document.querySelector(".menu-item_logout");

class Sidebar {

  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initToggleButton() {
    toggleButton.addEventListener("click", (e) => {
          e.preventDefault();
          body.classList.toggle("sidebar-open");
          body.classList.toggle("sidebar-collapse");
        });
  }

  static initAuthLinks() {
         menuRegister.addEventListener("click", () => {
          App.getModal("register").open();
         });

         menuLogin.addEventListener("click", () => {
          App.getModal("login").open();
         });
  
        menulogout.addEventListener("click", () => {
         let callback = function (err, response) {
          if (response && response.success) {
          App.setState("init");
           }
         };
          User.logout(callback);
        });
  }
}