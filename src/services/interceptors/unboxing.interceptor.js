export default {
  // global ajax success handler
  response(res) {
    if (/^20\d/.test(res.status)) {
      return res.data;
    }
    return res;
  },
};
