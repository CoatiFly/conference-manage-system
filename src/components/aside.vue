<template>
  <div class="aside_box">
    <div class="list_container">
      <div class="menu_box">
        <!-- 权限 -->
        <ul class="menu_list">
          <li
          class="menu_item"
          :key="index"
          :class="{active: activeName === 'Homepage'}"
          @click="switchMenu('Homepage')">
            <img src="@/assets/icon-board-hover.png" alt="展示" v-if="activeName === 'Homepage'">
            <img src="@/assets/icon-board.png" alt="展示" v-else>
          </li>
          <li
          class="menu_item"
          :key="index"
          :class="{active: activeName === 'MeetingList'}"
          @click="switchMenu('MeetingList')">
            <img src="@/assets/icon-list-hover.png" alt="展示" v-if="activeName === 'MeetingList'">
            <img src="@/assets/icon-list.png" alt="展示" v-else>
          </li>
        </ul>
        <!-- 其他 -->
        <!-- <ul class="menu_list">
          <li
          class="menu_item"
          v-for="(menu, index) in menuItem.second"
          :key="index"
          :class="{active: menu.code === activeName}"
          @click="switchMenu(menu)">
            <i class="iconfont" :class="menu.class"></i>
            <span class="name">{{menu.name}}</span>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import { get } from 'vuex-pathify';
import { MENU_LIST } from '@/config/constants';
import { mapState } from 'vuex';

export default {
  name: 'Aside',

  data() {
    return {
      menuList: [],
    };
  },

  computed: mapState({
    ...get('auth/*'),
    ...get('router/*'),
  }),

  mounted() {
    this.menuList = MENU_LIST.LIST;
  },

  destroyed() {
    this.menuList = [];
  },

  methods: {
    switchMenu(item) {
      this.selectNav = item;
      // 跳转到相关页面
      this.$tool.go(item);
    },
  }
};
</script>

<style lang="scss" scoped>
  .aside_box {
    width: 100%;
    height: 100%;
    background-color: #506bd8;
    .list_container {
      width: 100%;
      padding: 10px 0;
      overflow: hidden;
      .menu_box{
        width: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        overflow: hidden;
        .menu_title{
          padding-left: 20px;
          height: 28px;
          line-height: 34px;
          font-size: 12px;
          color: #9ba3af;
        }
      }
      .menu_list {
        width: 100%;
        overflow: hidden;
        .menu_item {
          width: 90px;
          height: 90px;
          margin: 0 auto;
          padding: 30px;
          box-sizing: border-box;
          text-align: center;
          overflow: hidden;
          cursor: pointer;
          &:hover{
            background-color:rgba($color: #fff, $alpha: .2);
          }
          &.active{
            background-color:rgba($color: #fff, $alpha: .2);
          }
          img{
            display: inline-block;
            width: 30px;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
