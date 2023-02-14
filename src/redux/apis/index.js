import api from "../axios";

class Rates {
  constructor(request) {
    this.request = request;
  }
  async createUser(data) {
    return this.request.post(`/online_adverts`, data);
  }
}

const RateService = new Rates(api);

export default RateService;
