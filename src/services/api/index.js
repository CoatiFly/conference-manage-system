import REST from './rest';
import authInterceptor from '@/services/interceptors/auth.interceptor'; // eslint-disable-line
import errorInterceptor from '@/services/interceptors/error.interceptor'; // eslint-disable-line
import unboxingInterceptor from '@/services/interceptors/unboxing.interceptor';

let API_URL = '';

if (process.env.NODE_ENV === 'development') {
  API_URL = process.env.VUE_APP_API_URL;
}

class APIService extends REST {
  constructor() {
    super(`${API_URL}/v1`);
    console.log('Base Url:', this.endPointURL);
    this.useInterceptor(
      authInterceptor,
      unboxingInterceptor,
      errorInterceptor,
    );
  }

  create(url = this.API_URL, config) {
    const api = new REST(url, config);
    api.useInterceptor(
      authInterceptor,
      unboxingInterceptor,
      errorInterceptor,
    );
    return api;
  }
}

export default new APIService();
