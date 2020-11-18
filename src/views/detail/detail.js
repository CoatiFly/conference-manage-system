import axios from 'axios';
import meetingService from '../../services/getmeet'

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
      meetingService.listMeet().then(res => {
        this.data = res.data;
      });
    },
    getUrl() {
      const local = window.location;
      this.url = local.origin + '/v1/meeting/1/image';
    },
    getRecord() {
      meetingService.listRecord().then(res => {
        this.record = res.Text.split('\n');
      })
    }
  },
};
