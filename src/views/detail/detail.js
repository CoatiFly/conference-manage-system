import meetingService from '../../services/getmeet'

export default {
  name: 'Index',

  data() {
    return {
      data: {},
      img: '',
      record: [],
      url: '',
      curTime: '',
      passFive: '',
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
    this.getCurrentTime();
    this.getPassFiveTime();
  },

  methods: {
    /**
     * 获取当前时间 格式：yyyy-MM-dd HH:MM:SS
     */
    getCurrentTime() {
      var date = new Date();//当前时间
      var month = this.zeroFill(date.getMonth() + 1);//月
      var day = this.zeroFill(date.getDate());//日
      var hour = this.zeroFill(date.getHours());//时
      var minute = this.zeroFill(date.getMinutes());//分
      var second = this.zeroFill(date.getSeconds());//秒
      
      //当前时间
      var curTime = date.getFullYear() + "-" + month + "-" + day
              + " " + hour + ":" + minute + ":" + second;
      this.curTime = curTime;
    },

    getPassFiveTime() {
      var date = new Date();//当前时间
      var month = this.zeroFill(date.getMonth() + 1);//月
      var day = this.zeroFill(date.getDate());//日
      var hour = this.zeroFill(date.getHours());//时
      var minute = this.zeroFill(date.getMinutes()) - 5;//分
      var second = this.zeroFill(date.getSeconds());//秒
      
      //当前时间
      var passFive = date.getFullYear() + "-" + month + "-" + day
              + " " + hour + ":" + minute + ":" + second;
      this.passFive = passFive;
    },
    /**
    * 补零
    */
    zeroFill(i){
      if (i >= 0 && i <= 9) {
          return "0" + i;
      } else {
          return i;
      }
    },

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
