
/* eslint-disable */
import { Message } from 'element-ui';
import { get as getValue } from 'lodash';
// import AuthService from '@/services/auth.service';

const errorMessage = (message) => {
  Message({
    message,
    type: 'error',
    duration: 4 * 1e3,
    showClose: true,
  });
};

/**
 * auth service handle global authrization.
 */
export default {
  response(res) {
    return res;
  },

  // global ajax error handler
  responseError(error) {
    // error reponse
    const { response = {} } = error;
    switch (response.status) {
      case 502:
        errorMessage('网络异常，请稍后再试');
        break;
      case 401:
        // AuthService.logout();
        break;
      case 403:
        if (getValue(response, 'headers.Authorization')) {
          errorMessage('权限不足');
        } else {
          errorMessage(getValue(response, 'data.error_info') || '网络异常，请稍后再试');
        }
        break;
      default:
        errorMessage(getValue(response, 'data.error_info') || '网络异常，请稍后再试');
    }
    return Promise.reject(response);
  },
};
