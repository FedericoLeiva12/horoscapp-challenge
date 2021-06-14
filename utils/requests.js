const axios = require("axios");

class Requests {
  constructor(base_url) {
    this.axios = axios.create({
      baseURL: base_url
    });
  }

  get(...args) {
    return this.axios.get(...args);
  }

  post(...args) {
    return this.axios.post(...args);
  }

  put(...args) {
    return this.axios.put(...args);
  }

  delete(...args) {
    return this.axios.delete(...args);
  }
}

export default Requests;