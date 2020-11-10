<template>
  <el-container class="app-content">
    <el-header class="app-header-container">
      <dx-header
        :userInfo="userInfo">
      </dx-header>
    </el-header>
    <el-container class="app-content-container">
      <el-aside class="app-aside">
        <dx-aside></dx-aside>
      </el-aside>
      <el-container class="app-main-container">
        <el-main class="app-main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script src="./container.js"></script>

<style lang="scss">
  .app-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    .app-header-container {
      width: 100%;
      height: 96px !important;
      background-color: #506bd8;
      box-shadow: 0 2px 4px 0 rgba(214, 214, 214, 0.5);
      padding: 0;
    }
    .app-content-container {
      display: flex;
      background-color: #F5F6FA;
      position: relative;
      overflow: hidden;
      .app-aside {
        width: 148px !important;
        background-color: #506bd8;
        overflow-y: auto;
        overflow-x: hidden;
      }
      .app-main-container{
        width: calc(100% - 148px);
        height: 100%;
        display: block;
        background: #506bd8;
        position: absolute;
        overflow: auto;
        top: 0;
        right: 0;
        z-index: 2;
        .app-main{
          display: block;
          width: 100%;
          height: 100%;
          overflow: auto;
          box-sizing: border-box;
          padding: 20px;
          border-radius: 12px 0 0 0;
          padding: 40px 60px !important;
          background-color: #fff;
        }
      }
      .app-footer-container {
        width: 100%;
        height: 40px !important;
        line-height: 40px;
        background-color: transparent;
      }
    }
  }
</style>
