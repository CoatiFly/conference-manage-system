import { get } from 'vuex-pathify';

export default {
  name: 'StandardContainer',

  computed: {
    ...get('auth/*'),
  },
  mounted() {
    console.log('Current Time: ', new Date().toLocaleString());
    // window.addEventListener('resize', tools.Zoom());
  },
};

