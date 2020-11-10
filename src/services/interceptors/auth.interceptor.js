import StorageService from '@/services/storage.service';

/**
 * auth service handle global authrization.
 */
export default {
  request(config) {
    const params = config;
    const token = StorageService.getToken();
    // const exception = ['/login', '/sso_login', '/settings/sso', '/settings/sso/identity-provider'];
    // if (!exception.includes(params.url)) {
    //   params.headers.Authorization = `Bearer ${token}`;
    // }
    return params;
  },
};
