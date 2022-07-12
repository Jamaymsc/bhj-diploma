
class AsyncForm {

  constructor(element) {

    if (!element) {
      throw new Error("Element was not found!");
    }

    this.element = element;
    this.registerEvents();
  }

  registerEvents() {
    
    this.element.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submit();
    });
  }

  getData() {
     
    const newData = {};
    const formData = new FormData(this.element);

    for (let element of formData.entries()) {
      newData[element[0]] = element[1];
    }
    return newData;
  }

  onSubmit(options) {}

  submit() {
     this.onSubmit(this.getData());
  }
}