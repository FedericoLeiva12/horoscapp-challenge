const { default: Requests } = require("../utils/requests");

class RandomUserService {
  constructor() {
    this.requests = new Requests(process.env.NEXT_PUBLIC_RANDOM_URL);
  }
  getRandomUser() {
    return this.requests.get();
  }
}

export default new RandomUserService;