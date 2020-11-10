
import APIService from './api';

class ServeiceRecord {
  constructor() {
    this.api = APIService;
  }

  listMeet() {
    return this.api.get(`/meeting/1`);
  }
  listRecord() {
    return this.api.get(`/meeting/1/record`);
  }
}

export default new ServeiceRecord();