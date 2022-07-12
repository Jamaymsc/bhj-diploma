
class Modal {
 
  constructor(element) {
    if (!element) {
      throw new Error("Element was not found!");
    }

    this.element = element;
    this.registerEvents();
  }

  registerEvents() {

    const closeButtons = this.element.querySelectorAll('[data-dismiss="modal"]');

    for (let button of closeButtons) {
      button.addEventListener("click", (e) => {
        this.onClose(e);
      });
    }
  }

  onClose(e) {
    e.preventDefault();
    this.close();
  }

  open() {
    this.element.style.display = "block";
    this.element.querySelector(".form-group input").focus();
  }
 
  close() {
    this.element.style.display = "none";
  }
}