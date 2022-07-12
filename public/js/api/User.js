
class User {
  static url = "/user";
 
  static setCurrent(user) {
localStorage.setItem("user", JSON.stringify(user));
  }

  static unsetCurrent() {
localStorage.removeItem("user");
  }

  static current() {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return;
    }
  }

  static fetch(callback) {
    createRequest({
      url: this.url + "/current",
      method: "GET",
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      },
    });
  }
  
  static register(data, callback) {
    createRequest ({
      url: this.url + "/register",
      method: "POST",
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback (err, response);
      },
    });
  }

  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }


  static logout(callback) {
  createRequest ({
    url: this.url + "/logout",
    method: "POST",
    callback: (err, response) => {
      if (response && response.success) {
        this.unsetCurrent();
      }
      callback (err, response);
    },
   });
  }
}
