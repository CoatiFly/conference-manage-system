<template>
  <div class="login-page">
    <div class="login-form-container">
      <div class="project_title">会议管理后台</div>
      <el-form
        class="login-form"
        :model="form"
        ref="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="UserName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="form.password"
            placeholder="PassWord"
            @keyup.enter.native="onSubmit()">
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="login" v-if="popupStatus"></div>
          <el-button
            type="primary"
            class="login-btn"
            @click="onSubmit()">
            {{loginBtnText}}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script src='./index.js'></script>

<style scope lang="scss">
@import './index.scss';
</style>
