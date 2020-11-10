import axios from 'axios';

export default {
  name: 'Index',

  data() {
    return {
      data: {},
      img: '',
      record: [],
      url: '',
    };
  },
  created() {
    this.getMeet();
    this.getRecord();
    this.getUrl();
  },
  methods: {
    getMeet() {
      axios.get('http://10.33.132.23:31970/v1/meeting/1').then(res => {
        this.data = res.data;
      });
    },
    getRecord() {
      axios.get('http://10.33.132.23:31970/v1/meeting/1/record').then(res => {
        this.record = res.data.Text.split('\n');
      })
    },
    getUrl() {
      const local = window.location;
      // console.log(local);
      // const local = window.location;
      this.url = local.origin + '/v1/meeting/1/image';
    },
  },
};
