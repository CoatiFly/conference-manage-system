<template>
  <div class="app-header clearfix">
    <ul class="header_list">
      <!-- 公司名 -->
      <li class="nav_item" @click="goItemPage('Homepage')">
        <div class="company_box">
          <img src="@/assets/logo.png"/>
          <div class="title">{{title}}</div>
        </div>
      </li>
      <!-- 搜索 -->
      <li class="nav_item">
        <div class="search_input">
          <el-input prefix-icon="el-icon-search" v-model="searchName" placeholder="search here..."></el-input>
        </div>
      </li>
      <!-- 用户 -->
      <li class="nav_item user_item">
        <div class="user_box">
          <el-dropdown trigger="click" placement="bottom" @command="handleCommand">
            <span class="el-dropdown-link">
              <img class="images_size" src="@/assets/icon_dce.png" alt="picturn">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="Personage">个人信息</el-dropdown-item>
              <el-dropdown-item command="exit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// api
import StorageService from '@/services/storage.service';
import store from '@/store/index';
import { get } from 'vuex-pathify';

export default {
  name: 'Header',
  props: {
    userInfo: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      spaceName: 'daocloud',
      isActive: '',
      title: '大白菜会议管理系统',
      searchName: '',
    };
  },
  computed: {
    ...get('router/*'),
  },

  watch: {
    activeName: {
      immediate: true,
      handler(str) {
        this.isActive = str;
      },
    },
  },

  created() {

  },
  methods: {
    // 个人信息
    handleCommand(command) {
      if (command === "exit") {
        // AuthService.logout();
      } else {
        this.isActive = '';
        this.$tool.go(command);
      }
    },
    // 跳转对应页面
    goItemPage(page) {
      this.isActive = page;
      this.$tool.go(page);
    },
  },
};
</script>

<style lang="scss">
  .app-header {
    width: 100%;
    height: 100%;
    padding: 28px 46px;
    box-sizing: border-box;
    .header_list {
      display: block;
      .nav_item{
        float: left;
        position: relative;
      }
      .company_box{
        float: left;
        overflow: hidden;
        cursor: pointer;
        img {
          height: 40px;
          float: left;
        }
        .title{
          padding-left: 10px;
          line-height: 36px;
          font-size: 16px;
          color:rgba($color: #fff, $alpha: .8);
          overflow: hidden;
        }
      }
      .search_input{
        width: 450px;
        position: absolute;
        top: 0;
        left: 160px;
        z-index: 2;
        .el-input__inner{
          color: #fff;
          border-color: #799be8;
          background-color: rgba($color: #fff, $alpha: .4);
        }
        .el-input__prefix{
          color: rgba($color: #fff, $alpha: .6);
        }
        ::-webkit-input-placeholder {
          color: rgba($color: #fff, $alpha: .6);
        }
      }
      .user_item{
        float: right;
      }
      .user_box{
        height: 40px;
        line-height: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        &:hover{
          border-radius: 50%;
          background: #506bd8;
          color: #ffffff;
          opacity: .9;
        }
        .images_size{
          width: 40px;
          height: 40px;
          overflow: hidden;
        }
        .userName{
          font-size: 14px;
          color: #ccd1d9;
          overflow: hidden;
        }
      }
    }
  }
</style>
