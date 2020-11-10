import StorageService from '@/services/storage.service';

export default {
  name: 'Login',
  data() {
    return {
      userInfo: {
        username: 'admin',
        password: 'admin',
      },
      loginBtnText: 'LOGIN',
      form: {
        username: '',
        password: '',
      },
      popupStatus: false,
    };
  },

  methods: {
    // login
    onSubmit() {
      this.popupStatus = true;
      if(this.form.username === this.userInfo.username && this.form.password === this.userInfo.password) {
        this.$store.dispatch('auth/setUserInfo', this.userInfo);
        StorageService.saveUser(this.userInfo);
        setTimeout(() => {
          this.popupStatus = false;
          this.$tool.go('Homepage');
        }, 2000);
      }else{
        this.$message.error('用户名或密码错误！');
        this.popupStatus = false;
        console.log('Error_Info: ', '用户名或密码错误！');
      }
    },
  },
};
