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
  
  computed: {
    isShow() {
      return Object.keys(this.data).length && this.record.length;
    }
  },

  created() {
    this.getMeet();
    this.getRecord();
    this.getUrl();
  },

  methods: {
    getMeet() {
      meetingService.listMeet().then(res => {
        if (res.data) {
          this.data = res.data;
        }
      });
    },
    getUrl() {
      const local = window.location;
      this.url = local.origin + '/v1/meeting/1/image';
    },
    getRecord() {
      meetingService.listRecord().then(res => {
        if (res) {
          this.record = res.Text.split('\n');
        }
      })
    }
  },
};
